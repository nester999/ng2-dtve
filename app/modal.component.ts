import { Component} from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';
// import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-modal',
  styleUrls: ['app/modal.component.css'],
  templateUrl: 'app/modal.component.html',
  // providers: [ MoviesService ]
  inputs: ['modalTitle']
})
export class ModalComponent { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;
    modalTitle: string;

    // constructor (private moviesService: MoviesService) {}

    // ngOnInit() {
    // }

}