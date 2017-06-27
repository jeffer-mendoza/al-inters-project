import {Component, OnInit, OnChanges, Input} from '@angular/core';

import {Movie} from '../model/movie';
import {Tv} from '../model/tv';
import {settings} from '../settings';

@Component({
  selector: 'movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit, OnChanges {

  @Input() movie: Movie;
  @Input() tv: Tv;
  @Input() size;
  @Input() viewMode;
  apiImg = settings.apiImg;
  urlDetail: string;

  constructor() {

  }

  ngOnInit(){

  }

  /**
   * Method implemented for listen changes of viewMode
   */
  ngOnChanges() {
    if(this.tv){
      this.movie = new Movie();
      this.movie.id = this.tv.id;
      this.movie.original_title = this.tv.original_name;
      this.movie.title = this.tv.name;
      this.movie.vote_average = this.tv.vote_average;
      this.movie.overview = this.tv.overview;
      this.movie.poster_path = this.tv.poster_path;
      this.movie.release_date = this.tv.first_air_date;
      this.urlDetail = '/tv-detail';
    }else{
      this.urlDetail = '/movie-detail';
    }

    //Only for view not compact apply this conditional
    if (!this.viewMode) {

      //Limit length of property overview for show in view
      if (this.movie.overview.length > 200) {
        this.movie.overview = this.movie.overview.substring(0, 200) + '...';
      }

      //Limit length of property overview for show in view
      if (this.movie.title.length > 30) {
        this.movie.title = this.movie.title.substring(0, 30) + '...';
      }
    }
  }


}
