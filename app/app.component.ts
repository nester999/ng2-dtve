import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { RouterConfig } from '@angular/router';

import { ControlGroup } from '@angular/common';
import { NavComponent } from './nav.component';
import { HeroSliderComponent } from './hero-slider.component';
import { MoviesService } from './movies.service';
import { PosterComponent } from './poster.component';
import { FooterComponent } from './footer.component';
import { FirebaseService } from './firebase.service';


@Component({
  selector: 'my-app',
  template: `
    <div class="wrapper">
    <ed-nav></ed-nav>
    <ed-hero-slider></ed-hero-slider>
    </div>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <label for="first-name">First Name</label>
      <input type="text" ngControl="firstName">
      <label for="last-name">Last Name</label>
      <input type="text" ngControl="lastName">
      <button type="submit">Submit</button>
      <button (click)="onGetUser()">Get User</button>
    </form>
    <div class="container" id="response">Response: {{response}}</div>
    <div class="container" id="getResponse">Get Response: {{getResponse}}</div>
    <ed-footer></ed-footer>
  `,
  providers: [ MoviesService, FirebaseService ],
  directives: [ NavComponent,
    HeroSliderComponent,
    PosterComponent,
    FooterComponent,
    ROUTER_DIRECTIVES
  ]
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
