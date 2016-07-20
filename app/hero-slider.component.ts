import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-hero-slider',
  styleUrls: ['app/hero-slider.component.css'],
  templateUrl: 'app/hero-slider.component.html',
  providers: [ MoviesService ]
})
export class HeroSliderComponent implements OnInit { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;

    constructor (private moviesService: MoviesService) {}

    ngOnInit() {
      this.getBackdropImages();
    }

    getBackdropImages() {
      this.moviesService.getHeroImages() 
        .subscribe(
           data => this.images = data,
           error => alert(error),
           () => console.log('finished')
        );
    }
}