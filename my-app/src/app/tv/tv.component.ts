import { Component, OnInit } from '@angular/core';

import { TvService } from '../service/tv.service'
import { Tv } from '../model/tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {

  tvs: Tv[];//movies's list
  tvResults: any[];//service's result
  viewMode = true;//view compact(true) or post(false)(require by MovieComponentTile)

  size = { //size movie's image(require by MovieComponentTile)
    width: "200",
    height: "270"
  };

  constructor(
    private tvService: TvService)
  {}

  /**
   * Init movies from service
   */
  ngOnInit(): void {
    this.getTvs();//init tvs
  }

  /**
   * Update view mode, which is handled by Movie Time component
   **/
  public changeViewMode(viewMode):void{
    this.viewMode = viewMode;
  }

  /**
   * Get movies's list with year and genre filter
   **/
  private getTvs():void{
    this.tvService
      .getTvs()
      .then(response => {this.tvResults = response; this.tvs = response.results as Tv[]});
  }

}
