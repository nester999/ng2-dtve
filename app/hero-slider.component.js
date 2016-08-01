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
var movies_service_1 = require('./movies.service');
var HeroSliderComponent = (function () {
    function HeroSliderComponent(moviesService) {
        this.moviesService = moviesService;
        this.curIndex = 0;
        this.moveCounter = 0;
        this.visibleSlides = 5;
        this.carouselHeight = 200;
        this.imageWidth = 1.777778 * this.carouselHeight; // 1280/720
    }
    HeroSliderComponent.prototype.ngOnInit = function () {
        this.getBackdropImages();
        console.log('this.images ', this.images);
        // this.setActive();
    };
    HeroSliderComponent.prototype.setActive = function () {
        var _this = this;
        this.images.forEach(function (image, i) {
            image.isActive = (_this.curIndex === i);
            if (image.isActive) {
                console.log('active image ', i);
            }
        });
    };
    HeroSliderComponent.prototype.getCarouselHeight = function () {
        return this.carouselHeight + 'px';
    };
    HeroSliderComponent.prototype.getSlidesWidth = function () {
        return ((this.totalNumberOfSlides / this.visibleSlides) * 100) + '%';
    };
    HeroSliderComponent.prototype.getImageWidth = function () {
        return this.imageWidth + '%';
    };
    HeroSliderComponent.prototype.moveCarousel = function () {
        return ((this.moveCounter * this.imageWidth)) + 'px';
    };
    HeroSliderComponent.prototype.counterMoveCarousel = function () {
        return (-1 * (this.moveCounter * this.imageWidth)) + 'px';
    };
    HeroSliderComponent.prototype.activePagination = function (curIndex) {
        return (curIndex === this.curIndex);
    };
    HeroSliderComponent.prototype.placeSlides = function (curIndex) {
        return (curIndex * this.imageWidth) + "px";
    };
    HeroSliderComponent.prototype.getBackdropImages = function () {
        var _this = this;
        this.moviesService.getHeroImages()
            .subscribe(function (data) {
            _this.images = data;
            _this.totalNumberOfSlides = data.length - 1;
            _this.setActive();
        }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    HeroSliderComponent.prototype.prev = function () {
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
        this.setActive();
        // this.images.push(this.images.shift());
        console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    };
    HeroSliderComponent.prototype.reorganizeSlides = function (direction) {
        if (direction === -1) {
            var lastImage = this.images.pop();
            this.images.unshift(lastImage);
        }
        else if (direction === 1) {
            this.images.push(this.images.shift());
        }
    };
    HeroSliderComponent.prototype.next = function () {
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
        this.setActive();
        // this.reorganizeSlides(1);
        // setTimeout(function() {
        // var lastImage = this.images.pop();
        // this.images.unshift(lastImage);
        // }, 1000);
        console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    };
    HeroSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-hero-slider',
            styleUrls: ['app/hero-slider.component.css'],
            templateUrl: 'app/hero-slider.component.html',
            directives: [common_1.NgClass],
            providers: [movies_service_1.MoviesService],
            animations: [
                core_1.trigger('myAnimation', [
                    core_1.state('void', core_1.style({ transform: 'scaleX(.7)' })),
                    core_1.state('secondPos', core_1.style({ transform: 'scaleX(1)' })),
                    core_1.transition('void => *', [
                        core_1.animate('200ms ease-in')
                    ]),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], HeroSliderComponent);
    return HeroSliderComponent;
}());
exports.HeroSliderComponent = HeroSliderComponent;
//# sourceMappingURL=hero-slider.component.js.map