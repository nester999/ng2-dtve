import { Component, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
// Import the Image interface
import {Image} from './image.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-movies',
  styleUrls: ['app/movies.component.css'],
  templateUrl: 'app/movies.component.html',
  directives: [NgClass],
  providers: [ MoviesService ]
})
export class MoviesComponent { 




    constructor (private moviesService: MoviesService) {}

}