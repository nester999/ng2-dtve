import { Component, Input } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-poster',
  styleUrls: ['app/poster.component.css'],
  templateUrl: 'app/poster.component.html',
  providers: [ MoviesService ]
})
export class PosterComponent { 
  //images data to be bound to the template
  @Input() posterImage: string = '';
  @Input() posterTitle: string = '';

  constructor (private moviesService: MoviesService) {}

}

