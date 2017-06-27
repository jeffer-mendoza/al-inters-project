import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { settings } from '../settings';

@Injectable()
export class SearchService {

  // Configuration variables of the movie db
  apiKey = settings.apiKey;
  apiUrl = settings.apiUrl + settings.apiVersion;

  constructor(private http: Http) {
  }

  /**
   * Service for access to multi search(movie, tv, person)
   * @return Promise<any>
   */
  search(term: string): Observable<any[]> {
    let url = this.apiUrl + '/search/multi?api_key=' + this.apiKey+'&query=' + term +"&language=en-US&page=1";
    return this.http
      .get(url)
      .map(response => response.json().results as any[]);
  }

}
