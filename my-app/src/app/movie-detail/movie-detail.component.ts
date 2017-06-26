import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { settings } from '../settings';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  video;//video movie's trailer
  size = { //size movie's image(require by MovieComponentTile)
    width: "200",
    height: "270"
  };
  apiImg= settings.apiImg;
  apiImgW= settings.apiImgW;
  isSimilar = false;//tab movies similar
  isDetail = true;//tab movie's detail


  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(response =>
      {
        this.movie= response;
        let url = settings.videoUrl + this.movie.videos.results[0].key;
        this.video =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
      });
  }

  /**
   * let switch between views, movie details and similar movies
   * @param isSimilar
   * @param isDetail
   */
  public changeTab(isSimilar, isDetail){
    this.isSimilar = isSimilar;
    this.isDetail = isDetail;
  }

  /**
   * Get the url for the background of the main image
   * @returns {string}
   */
  public getBackground(){
    return 'url('+this.apiImgW +this.movie.backdrop_path+')';
  }
}
