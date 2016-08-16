import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { RouterConfig } from '@angular/router';

import { ControlGroup } from '@angular/common';
import { NavComponent } from './nav.component';
import { HeroSliderComponent } from './hero-slider.component';
import { MoviesService } from './movies.service';
import { PosterComponent } from './poster.component';
import { PosterSliderComponent } from './poster-slider.component';
import { FooterComponent } from './footer.component';
import { FirebaseService } from './firebase.service';
import { LoginComponent } from './login.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ MoviesService, FirebaseService ],
  directives: [ NavComponent,
    HeroSliderComponent,
    PosterComponent,
    PosterSliderComponent,
    FooterComponent,
    ROUTER_DIRECTIVES
  ],
  precompile: [LoginComponent]

})
export class AppComponent implements OnInit { 
  latestMovies: any;
  getResponse: string;
  response: string;

  constructor(private firebaseService: FirebaseService) {}

  onSubmit(form: ControlGroup) {
    this.firebaseService.setUser(form.value.firstName, form.value.lastName)
          .subscribe(
            user => this.response = JSON.stringify(user),
            error => console.log(error)
          );
  }

  onGetUser() {
    this.firebaseService.getUser()
          .subscribe(
            user => this.getResponse = 'Get Response ' + JSON.stringify(user),
            error => console.log(error)
          );
  }

  ngOnInit() {
  }
  





}
