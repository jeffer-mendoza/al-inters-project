import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MovieService } from './service/movie.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorComponent } from './actor/actor.component';
import { SearchComponent } from './search/search.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieTileComponent,
    MovieDetailComponent,
    ActorComponent,
    SearchComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
