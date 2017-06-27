import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Tv} from '../model/tv';
import {settings} from '../settings';

/**
 * Service for access themoviedb's api
 */
@Injectable()
export class TvService {

  // Configuration variables of the movie db
  apiKey = settings.apiKey;
  apiUrl = settings.apiUrl + settings.apiVersion;

  constructor(private http: Http) {

  }

  /**
   * Service for access tv's list
   * @return Promise<any>
   */
  getTvs(): Promise<any> {

    const url = 'https://api.themoviedb.org/3/discover/tv?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json());
  }

  /**
   *
   * @param id
   * @returns Promise<Tv>
   */
  getTv(id: number): Promise<Tv> {
    const url = this.apiUrl + '/tv/' + id + '?api_key=' + this.apiKey;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Tv);
  }


}
