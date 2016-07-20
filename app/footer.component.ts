import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-footer',
  styleUrls: ['app/footer.component.css'],
  templateUrl: 'app/footer.component.html',
  providers: [ MoviesService ]
})
export class FooterComponent implements OnInit { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;

    constructor (private moviesService: MoviesService) {}

    ngOnInit() {
    }

}