import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../model/movie';
import { settings } from '../settings';

/**
 * Service for access themoviedb's api
 */
@Injectable()
export class MovieService {
    
    //Configuration variables of the movie db
    apiKey = settings.apiKey;
    apiUrl = settings.apiUrl;
    apiImg = settings.apiUrl;
    
    constructor(private http:Http){
        
    }
    
    
 /**
  * Service for access movies's list filtered by year and genre
  * 
  * param string year:   primary release year filter
  * param integer genre: movies's genre filter
  * 
  * return Promise<any> 
  */
  getMovies(year, genre): Promise<any> {
        var serviceVersion = "3";
        var serviceBase = this.normalizeEndpoint(serviceVersion);
    
        if (genre === undefined) {
            genre = 28;
        }
        if (year === undefined) {
            year = 2016;
        }
        
        var url = serviceBase.url + '/discover/movie?primary_release_year='+ year + '&with_genres='+ genre + '&api_key=' + serviceBase.apiKey;
        
        return this.http
                   .get(url)
                   .toPromise()
                   .then(response =>  response.json() );
    }
    
    
  
    /**
     * Determined the url for access to resource the movie db 
     * 
     * param string version 
     * 
     * return string url
     **/
    normalizeEndpoint(version) {

        return {
            'url': this.apiUrl + version,
            'apiKey': this.apiKey
        };
    }
  
}
