import { Component, OnChanges, Input } from '@angular/core';

import { Movie } from '../model/movie';
import { settings } from '../settings';

@Component({
  selector: 'movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnChanges {

  @Input() movie: Movie;
  @Input() size;
  @Input() viewMode;
  apiImg = settings.apiImg;

  constructor() {

  }

  /**
   * Method implemented for listen changes of viewMode
   */
  ngOnChanges(){
    //Only for view not compact apply this conditional
    if(!this.viewMode){

      //Limit length of property overview for show in view
      if(this.movie.overview.length > 200){
        this.movie.overview = this.movie.overview.substring(0, 200) + '...';
      }

      //Limit length of property overview for show in view
      if(this.movie.title.length > 30){
        this.movie.title = this.movie.title.substring(0, 30) + '...';
      }
    }
  }


}
