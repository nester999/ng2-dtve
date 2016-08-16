import { Component, 
  // OnInit, 
  Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import {NgClass} from '@angular/common';
// Import the Image interface
import {Image} from './image.interface';
import { PosterComponent } from './poster.component'
import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-poster-slider',
  styleUrls: ['app/poster-slider.component.css'],
  templateUrl: 'app/poster-slider.component.html',
  directives: [NgClass, PosterComponent ],
  providers: [ MoviesService ],
  // animations: [
  //   trigger('myAnimation', [
  //     state('void', style({transform: 'scaleX(.7)'})),
  //     state('secondPos', style({transform: 'scaleX(1)'})),
  //     transition('void => *', [
  //       animate('200ms ease-in')
  //     ]),
  //     // transition('* => void', [
  //     //   style({transform: 'scaleX(0)'}),
  //     //   animate(100)
  //     // ]),
  //   ])
  // ]
})
export class PosterSliderComponent { 
  // //images data to be bound to the template
    // public posters: Poster[];
  //   getData: any;

  //   container;
    curIndex = 0;
    moveCounter = 0;
    visibleSlides = 5;
    totalNumberOfSlides;
    isActivePagination;
    
    carouselHeight = 220;
    imageWidth = 1.777778 * this.carouselHeight; // 1280/720



  //   constructor (private moviesService: MoviesService) {}

  //   ngOnInit() {
  //     this.getBackdropImages();
  //     console.log('this.images ', this.images);
  //     // this.setActive();
  //   }

  //   setActive() {
  //     this.images.forEach((image, i) => {
  //       image.isActive = (this.curIndex === i);
  //       if(image.isActive) {
  //         console.log('active image ', i);
  //       }
  //     })
  //   }

  //   getCarouselHeight() {
  //     return this.carouselHeight + 'px';
  //   }

    getSlidesWidth() {
      return ((this.totalNumberOfSlides+1/this.visibleSlides) * 100) + '%';
    }

  //   getImageWidth() {
  //     return this.imageWidth + 'px';
  //   }

    moveCarousel() {
      return ((this.moveCounter * this.imageWidth)) + 'px';
    }

  //   counterMoveCarousel() {
  //     return (-1*(this.moveCounter * this.imageWidth)) + 'px';
  //   }

  //   activePagination(curIndex) {
  //     return (curIndex === this.curIndex);
  //   }

  //   placeSlides(curIndex) {
  //     return (curIndex * this.imageWidth) + "px";
  //   }

  //   getBackdropImages() {
  //     this.moviesService.getHeroImages() 
  //       .subscribe(
  //          data => {
  //            this.images = data; 
  //            this.totalNumberOfSlides = data.length-1;
  //            this.setActive();
  //          },
  //          error => alert(error),
  //          () => console.log('finished')
  //       );
  //   }

    prev() {
      if(this.moveCounter < 0) {
        this.moveCounter++;
        if (this.curIndex <= 0) {
          this.curIndex = this.totalNumberOfSlides;
        } 
        else {
          this.curIndex--;
        }
        // this.reorganizeSlides(-1);
      }
      else if(this.curIndex > 0) {
        this.curIndex--;
      }
      // this.setActive();
      // this.images.push(this.images.shift());
      console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    }

  //   reorganizeSlides(direction) {
  //     if(direction === -1) {
  //       var lastImage = this.images.pop();
  //       this.images.unshift(lastImage);
  //     }
  //     else if(direction === 1){
  //       this.images.push(this.images.shift());
  //     }
  //   }
    


    next() {
      if(this.moveCounter >= (this.totalNumberOfSlides - this.visibleSlides) * -1) {
        this.moveCounter--;
        this.curIndex++;
        //infinityStuff
        if(this.curIndex > this.totalNumberOfSlides) {
          this.curIndex = 0;
        }
      }
      else if(this.curIndex < this.totalNumberOfSlides) {
        this.curIndex++;
      }
      // this.setActive();
      
      
      
      // this.reorganizeSlides(1);
       
      // setTimeout(function() {
        // var lastImage = this.images.pop();
        // this.images.unshift(lastImage);
         
      // }, 1000);
      console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    }
}


