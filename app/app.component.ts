import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { HeroSliderComponent } from './hero-slider.component';
import { MoviesService } from './movies.service';
@Component({
  selector: 'my-app',
  template: `
    <ed-nav></ed-nav>
    <ed-hero-slider></ed-hero-slider>
    <span>{{latestMovies}}</span>
  `,
  providers: [ MoviesService ],
  directives: [ NavComponent,
    HeroSliderComponent
  ]
})
export class AppComponent implements OnInit { 
  latestMovies: any;

  ngOnInit() {
    this.getLatestMovies();
  }
  constructor(private moviesService: MoviesService) { }




  getLatestMovies() {
    this.latestMovies = this.moviesService.getLatestMovies();
    this.moviesService.getLatestMovies().then(latestMovies => {this.latestMovies = latestMovies});
  }


}
