import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeroComponent }        from './hero.component/hero.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { DashBoardComponent } from './dashboard.component/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'heroes', component: HeroComponent },
      { path: 'detail/:id', component: HeroDetailComponent}
    ])
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
