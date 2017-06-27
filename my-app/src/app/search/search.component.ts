import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SearchService } from '../service/search.service';
import { Movie } from '../model/movie';
import { Actor } from '../model/actor';
import { settings } from '../settings';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  results: Observable<any[]>;
  active= false;
  apiImg = settings.apiImg;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit(): void {
    this.results = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.searchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  /**
   * Go to view the selected view
   * @param result
   */
  gotoDetail(result): void {
    this.active = false;
    let link:any;
    if(result.media_type == 'movie'){
      link = ['/movie-detail', result.id];
    }else{
      if(result.media_type == 'person'){
        link = ['/actor', result.id];
      }else{
        if(result.media_type == 'tv') {
          link = ['/movie-detail', result.id];
        }
      }
    }
    this.router.navigate(link);
  }

  /**
   * Allows you to expand the search input and display the results
   */
  activeSearch():void{
    this.active = true;
  }

  /**
   * Allows you to narrow down the search input and hide the results area
   * @param term
   */
  desactiveSearch(term:string):void{
    if(term.length == 0){
      this.active = false;
    }
  }

}
