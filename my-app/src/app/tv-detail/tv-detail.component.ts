import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Tv } from '../model/tv';
import { TvService } from '../service/tv.service';
import { settings } from '../settings';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent implements OnInit {
  tv: Tv;
  size = { //size movie's image(require by MovieComponentTile)
    width: "200",
    height: "270"
  };
  apiImg = settings.apiImg;
  apiImgW = settings.apiImgW;
  isSeason = false;//tab season
  isDetail = true;//tab movie's detail


  constructor(private tvService: TvService,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.tvService.getTv(+params['id']))
      .subscribe(response => {this.tv = response as Tv; console.log(response) });
  }

  /**
   * let switch between views, tv details and season
   * @param isSeason
   * @param isDetail
   */
  public changeTab(isSeason, isDetail) {
    this.isSeason = isSeason;
    this.isDetail = isDetail;
  }

  /**
   * Get the url for the background of the main image
   * @returns {string}
   */
  public getBackground() {
    return 'url(' + this.apiImgW + this.tv.backdrop_path + ')';
  }
}
