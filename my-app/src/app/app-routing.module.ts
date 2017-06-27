import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { MovieComponent }       from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorComponent }        from './actor/actor.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'movie', component: MovieComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: 'actor/:id', component: ActorComponent},
  { path: 'tv', component: TvComponent},
  { path: 'tv-detail/:id', component: TvDetailComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
