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
var modal_component_1 = require('./modal.component');
var HeroSliderComponent = (function () {
    function HeroSliderComponent(moviesService) {
        this.moviesService = moviesService;
        this.state = 'derp';
        this.isInfinite = true;
        this.visibleSlides = 5;
        this.curIndex = this.isInfinite ? this.visibleSlides : 0;
        this.moveCounter = this.isInfinite ? this.visibleSlides * -1 : 0;
        this.currentlyLooping = false;
        this.carouselHeight = 220;
        this.imageWidth = 1.777778 * this.carouselHeight; // 1280/720
    }
    HeroSliderComponent.prototype.ngOnInit = function () {
        this.getBackdropImages();
        console.log('this.images ', this.images);
        // this.setActive();
    };
    HeroSliderComponent.prototype.toggleState = function () {
        this.state = this.state === 'derp' ? 'sup' : 'derp';
    };
    HeroSliderComponent.prototype.setActive = function () {
        var _this = this;
        this.images.forEach(function (image, i) {
            image.isActive = (_this.curIndex === i);
            // console.log('image[' + i + '].isActive ', image.isActive)
            if (image.isActive) {
                console.log('active image ', i);
            }
        });
    };
    HeroSliderComponent.prototype.resetCarousel = function (direction) {
        var _this = this;
        setTimeout(function () {
            // alert('in timeout');
            if (direction === 'next') {
                console.log(_this);
                _this.currentlyLooping = true;
                _this.images[_this.curIndex].isActive = false;
                // this.images[0].isActive = true;
                _this.curIndex = _this.visibleSlides;
                _this.moveCounter = -1 * (_this.visibleSlides);
            }
            else if (direction === 'prev') {
                console.log('in prev', _this);
                _this.currentlyLooping = true;
                _this.images[_this.curIndex].isActive = false;
                // this.images[0].isActive = true;
                _this.curIndex = _this.totalNumberOfSlides - _this.visibleSlides;
                _this.moveCounter = -1 * (_this.totalNumberOfSlides - _this.visibleSlides);
            }
        }, 500);
    };
    HeroSliderComponent.prototype.switchTransition = function () {
        return ((this.currentlyLooping ? '0s' : '0.3s all ease-in-out'));
    };
    HeroSliderComponent.prototype.getCarouselHeight = function () {
        return this.carouselHeight + 'px';
    };
    HeroSliderComponent.prototype.getSlidesWidth = function () {
        return ((this.totalNumberOfSlides + 1 / this.visibleSlides) * 100) + '%';
    };
    HeroSliderComponent.prototype.getImageWidth = function () {
        return this.imageWidth + 'px';
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
            if (_this.isInfinite) {
                var length_1 = _this.images.length;
                var prevVisibleImages = data.slice((length_1 - _this.visibleSlides), length_1);
                var nextVisibleImages = data.slice(0, _this.visibleSlides);
                // console.log('prevVisibleImages ', prevVisibleImages);
                _this.images = _this.images.concat(nextVisibleImages);
                _this.images = prevVisibleImages.concat(_this.images);
                _this.curIndex = _this.visibleSlides;
                _this.moveCounter = _this.visibleSlides * -1;
                console.log('this.images', _this.images);
            }
            else {
                _this.curIndex = 0;
                _this.moveCounter = 0;
            }
            _this.totalNumberOfSlides = _this.images.length - 1;
            // this.images[0].isActive = true;
            // this.images[this.images.length].isActive = false;
            console.log('this.curIndex ', _this.curIndex);
            // this.setActive();
        }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    HeroSliderComponent.prototype.prev = function () {
        this.currentlyLooping = false;
        if (this.isInfinite) {
            if (this.moveCounter < (this.visibleSlides) * -1) {
                this.moveCounter++;
                this.curIndex--;
            }
            else if (this.curIndex === (this.visibleSlides)) {
                this.moveCounter++;
                this.resetCarousel('prev');
            }
        }
        else {
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
        }
    };
    // reorganizeSlides(direction) {
    //   if(direction === -1) {
    //     var lastImage = this.images.pop();
    //     this.images.unshift(lastImage);
    //   }
    //   else if(direction === 1){
    //     this.images.push(this.images.shift());
    //   }
    // }
    HeroSliderComponent.prototype.next = function () {
        this.currentlyLooping = false;
        // this.setActive();
        if (this.moveCounter >= ((this.totalNumberOfSlides - this.visibleSlides) * -1)) {
            this.moveCounter--;
            this.curIndex++;
        }
        else if (this.curIndex < this.totalNumberOfSlides) {
            this.curIndex++;
        }
        // this.setActive();
        if (this.isInfinite) {
            if (this.curIndex > (this.totalNumberOfSlides - this.visibleSlides)) {
                // console.log('getting in 0 setting area?')
                // this.moveCarousel().then(function() {
                // })
                this.resetCarousel('next');
            }
        }
        // setTimeout(() => {
        // this.setActive();
        // }, 1000);
        // this.reorganizeSlides(1);
        // setTimeout(function() {
        // var lastImage = this.images.pop();
        // this.images.unshift(lastImage);
        // }, 1000);
        // console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroSliderComponent.prototype, "isInfinite", void 0);
    HeroSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-hero-slider',
            styleUrls: ['app/hero-slider.component.css'],
            templateUrl: 'app/hero-slider.component.html',
            directives: [common_1.NgClass, modal_component_1.ModalComponent],
            providers: [movies_service_1.MoviesService],
            animations: [
                core_1.trigger('myanim', [
                    core_1.state('void', core_1.style({ opacity: 0, transform: 'translateY(10px)' })),
                    core_1.state('blah', core_1.style({ opacity: 0 })),
                    core_1.state('derp', core_1.style({ opacity: 1 })),
                    core_1.transition('void => *', [
                        // style({opacity: 1}),
                        core_1.animate('1000ms cubic-bezier(0.49, 0, 0.71, 1.25)')
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