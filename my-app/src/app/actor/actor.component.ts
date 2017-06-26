import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../service/movie.service';
import { Actor } from '../model/actor';
import { settings } from '../settings';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor: Actor;
  apiImg= settings.apiImg;
  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.movieService.getActor(+params['id']))
      .subscribe(response => {this.actor= response; console.log(response)});
  }

}
