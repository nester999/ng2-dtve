import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MoviesService, FirebaseService ],
  directives: [ NavComponent,
    HeroSliderComponent,
    PosterComponent,
    PosterSliderComponent,
    FooterComponent,
    ROUTER_DIRECTIVES
  ],
  precompile: [LoginComponent, PosterSliderComponent]

})
export class AppComponent implements OnInit { 
  latestMovies: any;
  getResponse: string;
  response: string;
  infiniteHero: boolean = true;

  constructor(private firebaseService: FirebaseService) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAv3KpPEHvE8PL2h2lRKjZu2o38VrPTYno",
      authDomain: "ng2-dtve.firebaseapp.com",
      databaseURL: "https://ng2-dtve.firebaseio.com",
      storageBucket: "ng2-dtve.appspot.com",
      messagingSenderId: "871792410831"
    };
    firebase.initializeApp(config);

    var root = firebase.database().ref('messages/2');

    root.on('value', function(snap) {
      console.log('snap key ', snap.key, ' snap val', snap.val());
    });
  }

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
