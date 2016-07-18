import { Component } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';

@Component({
  selector: 'ed-hero-slider',
  styleUrls: ['app/hero-slider.component.css'],
  templateUrl: 'app/hero-slider.component.html',
})
export class HeroSliderComponent { 
  //images data to be bound to the template
    public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "We are covered", "url": "http://www.placekitten.com/1200/400/" },
  { "title": "Generation Gap", "url": "http://www.placekitten.com/1200/400/" },
  { "title": "Potter Me", "url": "http://www.placekitten.com/1200/400/" },
  { "title": "Pre-School Kids", "url": "http://www.placekitten.com/1200/400/" },
  { "title": "Young Peter Cech", "url": "http://www.placekitten.com/1200/400/" } 
];