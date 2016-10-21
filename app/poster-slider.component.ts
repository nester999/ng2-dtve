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
  providers: [ MoviesService ]
})
export class PosterSliderComponent { 
  // //images data to be bound to the template
  // public posters: Poster[];
  public posters: Image[];
  getData: any;
  state: string = 'derp';

  container;
  @Input() isInfinite = true;
  visibleSlides = 5;
  curIndex = this.isInfinite ? this.visibleSlides : 0;
  moveCounter = this.isInfinite ? this.visibleSlides * -1 : 0;
  totalNumberOfSlides;
  isActivePagination;
  currentlyLooping = false; 
  public rightPlaceholder: Image[];
  
  carouselHeight = 220;
  imageWidth = 1.777778 * this.carouselHeight; // 1280/720



  constructor (private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPosterImages();
    console.log('this.posters ', this.posters);
    // this.setActive();
  }

  toggleState() {
    this.state = this.state === 'derp' ? 'sup' : 'derp';
  }

  setActive() {
    this.posters.forEach((poster, i) => {
      poster.isActive = (this.curIndex === i);
      if(poster.isActive) {
        console.log('active poster ', i);
      }
    })
  }

  getCarouselHeight() {
    return this.carouselHeight + 'px';
  }

  getSlidesWidth() {
    return ((this.totalNumberOfSlides+1/this.visibleSlides) * 100) + '%';
  }
  
  moveCarousel() {
    return ((this.moveCounter * this.imageWidth)) + 'px';
  }

  resetCarousel(direction: string) { 

    setTimeout(() => {
      // alert('in timeout');
      if(direction === 'next') {
        console.log(this)
        this.currentlyLooping = true;
        this.posters[this.curIndex].isActive = false;
        // this.images[0].isActive = true;
        this.curIndex = this.visibleSlides;
        this.moveCounter = -1 * (this.visibleSlides);
        // this.setActive();
      }
      else if(direction === 'prev') {
        console.log('in prev', this)
        this.currentlyLooping = true;
        this.posters[this.curIndex].isActive = false;
        // this.images[0].isActive = true;
        this.curIndex = this.totalNumberOfSlides - this.visibleSlides;
        this.moveCounter = -1 * (this.totalNumberOfSlides - this.visibleSlides);
        // this.setActive();
      }
    }
    , 500);
  }
  switchTransition() {
    return ((this.currentlyLooping ? '0s' : '0.3s all ease-in-out'));
  }
  getImageWidth() {
    return this.imageWidth + 'px';
  }
  counterMoveCarousel() {
    return (-1*(this.moveCounter * this.imageWidth)) + 'px';
  }

  activePagination(curIndex) {
    return (curIndex === this.curIndex);
  }

  placeSlides(curIndex) {
    return (curIndex * this.imageWidth) + "px";
  }

  getPosterImages() {
    this.moviesService.getPosterImages() 
      .subscribe(
         data => {
           this.posters = data;
           if(this.isInfinite) {
             let length = this.posters.length;
             let prevVisibleImages = data.slice((length - this.visibleSlides),length);
             let nextVisibleImages = data.slice(0,this.visibleSlides);
             // console.log('prevVisibleImages ', prevVisibleImages);
             this.posters = this.posters.concat(nextVisibleImages);
             this.posters = prevVisibleImages.concat(this.posters);
             this.curIndex = this.visibleSlides;
             this.moveCounter = this.visibleSlides * -1;
             console.log('this.posters', this.posters);
           }
           else {
             this.curIndex = 0;
             this.moveCounter = 0;
           }
           this.totalNumberOfSlides = this.posters.length-1;
           // this.images[0].isActive = true;
           // this.images[this.images.length].isActive = false;
           console.log('this.curIndex ', this.curIndex);
           // this.setActive();
         },
         error => alert(error),
         () => console.log('finished')
      );
  }

  prev() {
    this.currentlyLooping = false;
    if(this.isInfinite) {
      if(this.moveCounter < (this.visibleSlides)*-1 ) {
        this.moveCounter++;
        this.curIndex--;
      }
      else if(this.curIndex === (this.visibleSlides)) {
        this.moveCounter++;
        this.resetCarousel('prev');
      }
    }
    else {
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
    
  }
  


  next() {
    this.currentlyLooping = false;
    // this.setActive();
    if(this.moveCounter >= ((this.totalNumberOfSlides - this.visibleSlides) * -1)) {
      this.moveCounter--;
      this.curIndex++;
      
    }
    else if(this.curIndex < this.totalNumberOfSlides) {
      this.curIndex++;
    }

    // this.setActive();

    if(this.isInfinite) {
      if(this.curIndex > (this.totalNumberOfSlides - this.visibleSlides)) {
        
        // console.log('getting in 0 setting area?')
        // this.moveCarousel().then(function() {
        // })
        this.resetCarousel('next');
      }
    }
  }
}


