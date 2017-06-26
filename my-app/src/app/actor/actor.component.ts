import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {MovieService} from '../service/movie.service';
import {Actor} from '../model/actor';
import {settings} from '../settings';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor: Actor;
  apiImg = settings.apiImg;
  size = { //size movie's image(require by MovieComponentTile)
    width: "200",
    height: "270"
  };
  isMovies = false;//tab movies similar
  isDetail = true;//tab movie's detail
  imgModal: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.movieService.getActor(+params['id']))
      .subscribe(response => {
        this.actor = response;
        this.imgModal = this.actor.profile_path
      });
  }

  /**
   * let switch between views, movie details and similar movies
   * @param isMovies
   * @param isDetail
   */
  public changeTab(isMovies, isDetail) {
    this.isMovies = isMovies;
    this.isDetail = isDetail;
  }

  /**
   * let asigned image will show  in the modal
   * @param image_path
   */
  imageSelected(image_path) {
    this.imgModal = image_path;
  }

}
