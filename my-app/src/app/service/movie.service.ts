import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Movie} from '../model/movie';
import {settings} from '../settings';

/**
 * Service for access themoviedb's api
 */
@Injectable()
export class MovieService {

  // Configuration variables of the movie db
  apiKey = settings.apiKey;
  apiUrl = settings.apiUrl + settings.apiVersion;

  constructor(private http: Http) {

  }

  /**
   * Service for access movies's list filtered by year and genre
   *
   * @param string year:   primary release year filter
   * @param integer genre: movies's genre filter
   *
   * @return Promise<any>
   */
  getMovies(year, genre): Promise<any> {

    if (genre === undefined) {
      genre = 28;
    }
    if (year === undefined) {
      year = 2016;
    }

    const url = this.apiUrl + '/discover/movie?primary_release_year=' + year + '&with_genres=' + genre + '&api_key=' + this.apiKey;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json());
  }

  /**
   * Service for access movie's genre
   * @return Promise<any>
   */
  getGenres(): Promise<any>{

    const url = this.apiUrl + '/genre/movie/list?api_key=' + this.apiKey;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json());
  }

  /**
   *
   * @param id
   * @returns Promise<Movie>
   */
  getMovie(id: number): Promise<Movie> {
    const url = this.apiUrl + '/movie/' + id + '?api_key=' + this.apiKey + '&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images';

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie);
  }

}
