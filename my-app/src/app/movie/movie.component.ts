import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';


/**
 * Component show movies with filters of year and genres, and compact and 
 * post view mode.
 * 
 * @author jeffer Mendoza <jefferson.mendoza@correounivalle.edu.co>
**/
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: [ 'movie.component.css' ]
})

export class MovieComponent implements OnInit {
  movies: Movie[];//movies's list 
  movieResults: any[];//service's result 
  yearsSelect = [];//options for year's select 
  year = 2017;//year selected
  genre = 28;//genre selected
  viewMode = true;//view compact(true) or post(false)(require by MovieComponentTile)
            
  size = {//size movie's image(require by MovieComponentTile)
    width: "200",
    height: "270"
  };
  

  constructor(
    private movieService: MovieService) {
        //init year select
        var yearInit = 2018;
        for (var i = 0; i < 119; i++) {
          this.yearsSelect[i] = yearInit;
          yearInit--;
        }
    }

  /**
  * Init movies from service
  */
  ngOnInit(): void {
    this.getMovies();
  }
  
  /**
   * Update view mode, which is handled by Movie Time component
   **/
  public changeViewMode(viewMode):void{
    this.viewMode = viewMode;
  }
  
   /**
   * Update property year and get new movies's list with filter selected  
   **/
  public changeYear(year):void{
    this.year = year;
    this.getMovies();
  }
  
  /**
   * Update property genre and get new movies's list with filter selected  
   **/
  public changeGenre(genre):void{
    this.genre = genre;
    this.getMovies();
  }
  
  /**
  * Get movies's list with year and genre filter  
  **/
  private getMovies():void{
      this.movieService
          .getMovies(this.year, this.genre)
          .then(response => {this.movieResults = response; this.movies = response.results as Movie[]; console.log(this.movies)});
  }

}
