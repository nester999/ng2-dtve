import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { HeroSliderComponent } from './hero-slider.component';
import { MoviesService } from './movies.service';
import { PosterComponent } from './poster.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="wrapper">
    <ed-nav></ed-nav>
    <ed-hero-slider></ed-hero-slider>
    <span>{{latestMovies}}</span>
    <row>
      <ed-poster></ed-poster>
    </row>
    </div>
    <ed-footer></ed-footer>

  `,
  providers: [ MoviesService ],
  directives: [ NavComponent,
    HeroSliderComponent,
    PosterComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit { 
  latestMovies: any;

  ngOnInit() {
  }
  





}
