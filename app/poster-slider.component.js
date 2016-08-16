"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var poster_component_1 = require('./poster.component');
var movies_service_1 = require('./movies.service');
var PosterSliderComponent = (function () {
    function PosterSliderComponent() {
        // //images data to be bound to the template
        // public posters: Poster[];
        //   getData: any;
        //   container;
        this.curIndex = 0;
        this.moveCounter = 0;
        this.visibleSlides = 5;
        this.carouselHeight = 220;
        this.imageWidth = 1.777778 * this.carouselHeight; // 1280/720
    }
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
    PosterSliderComponent.prototype.getSlidesWidth = function () {
        return ((this.totalNumberOfSlides + 1 / this.visibleSlides) * 100) + '%';
    };
    //   getImageWidth() {
    //     return this.imageWidth + 'px';
    //   }
    PosterSliderComponent.prototype.moveCarousel = function () {
        return ((this.moveCounter * this.imageWidth)) + 'px';
    };
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
    PosterSliderComponent.prototype.prev = function () {
        if (this.moveCounter < 0) {
            this.moveCounter++;
            if (this.curIndex <= 0) {
                this.curIndex = this.totalNumberOfSlides;
            }
            else {
                this.curIndex--;
            }
        }
        else if (this.curIndex > 0) {
            this.curIndex--;
        }
        // this.setActive();
        // this.images.push(this.images.shift());
        console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    };
    //   reorganizeSlides(direction) {
    //     if(direction === -1) {
    //       var lastImage = this.images.pop();
    //       this.images.unshift(lastImage);
    //     }
    //     else if(direction === 1){
    //       this.images.push(this.images.shift());
    //     }
    //   }
    PosterSliderComponent.prototype.next = function () {
        if (this.moveCounter >= (this.totalNumberOfSlides - this.visibleSlides) * -1) {
            this.moveCounter--;
            this.curIndex++;
            //infinityStuff
            if (this.curIndex > this.totalNumberOfSlides) {
                this.curIndex = 0;
            }
        }
        else if (this.curIndex < this.totalNumberOfSlides) {
            this.curIndex++;
        }
        // this.setActive();
        // this.reorganizeSlides(1);
        // setTimeout(function() {
        // var lastImage = this.images.pop();
        // this.images.unshift(lastImage);
        // }, 1000);
        console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    };
    PosterSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-poster-slider',
            styleUrls: ['app/poster-slider.component.css'],
            templateUrl: 'app/poster-slider.component.html',
            directives: [common_1.NgClass, poster_component_1.PosterComponent],
            providers: [movies_service_1.MoviesService],
        }), 
        __metadata('design:paramtypes', [])
    ], PosterSliderComponent);
    return PosterSliderComponent;
}());
exports.PosterSliderComponent = PosterSliderComponent;
//# sourceMappingURL=poster-slider.component.js.map