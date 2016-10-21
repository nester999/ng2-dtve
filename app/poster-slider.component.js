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
    function PosterSliderComponent(moviesService) {
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
    PosterSliderComponent.prototype.ngOnInit = function () {
        this.getPosterImages();
        console.log('this.posters ', this.posters);
        // this.setActive();
    };
    PosterSliderComponent.prototype.toggleState = function () {
        this.state = this.state === 'derp' ? 'sup' : 'derp';
    };
    PosterSliderComponent.prototype.setActive = function () {
        var _this = this;
        this.posters.forEach(function (poster, i) {
            poster.isActive = (_this.curIndex === i);
            if (poster.isActive) {
                console.log('active poster ', i);
            }
        });
    };
    PosterSliderComponent.prototype.getCarouselHeight = function () {
        return this.carouselHeight + 'px';
    };
    PosterSliderComponent.prototype.getSlidesWidth = function () {
        return ((this.totalNumberOfSlides + 1 / this.visibleSlides) * 100) + '%';
    };
    PosterSliderComponent.prototype.moveCarousel = function () {
        return ((this.moveCounter * this.imageWidth)) + 'px';
    };
    PosterSliderComponent.prototype.resetCarousel = function (direction) {
        var _this = this;
        setTimeout(function () {
            // alert('in timeout');
            if (direction === 'next') {
                console.log(_this);
                _this.currentlyLooping = true;
                _this.posters[_this.curIndex].isActive = false;
                // this.images[0].isActive = true;
                _this.curIndex = _this.visibleSlides;
                _this.moveCounter = -1 * (_this.visibleSlides);
            }
            else if (direction === 'prev') {
                console.log('in prev', _this);
                _this.currentlyLooping = true;
                _this.posters[_this.curIndex].isActive = false;
                // this.images[0].isActive = true;
                _this.curIndex = _this.totalNumberOfSlides - _this.visibleSlides;
                _this.moveCounter = -1 * (_this.totalNumberOfSlides - _this.visibleSlides);
            }
        }, 500);
    };
    PosterSliderComponent.prototype.switchTransition = function () {
        return ((this.currentlyLooping ? '0s' : '0.3s all ease-in-out'));
    };
    PosterSliderComponent.prototype.getImageWidth = function () {
        return this.imageWidth + 'px';
    };
    PosterSliderComponent.prototype.counterMoveCarousel = function () {
        return (-1 * (this.moveCounter * this.imageWidth)) + 'px';
    };
    PosterSliderComponent.prototype.activePagination = function (curIndex) {
        return (curIndex === this.curIndex);
    };
    PosterSliderComponent.prototype.placeSlides = function (curIndex) {
        return (curIndex * this.imageWidth) + "px";
    };
    PosterSliderComponent.prototype.getPosterImages = function () {
        var _this = this;
        this.moviesService.getPosterImages()
            .subscribe(function (data) {
            _this.posters = data;
            if (_this.isInfinite) {
                var length_1 = _this.posters.length;
                var prevVisibleImages = data.slice((length_1 - _this.visibleSlides), length_1);
                var nextVisibleImages = data.slice(0, _this.visibleSlides);
                // console.log('prevVisibleImages ', prevVisibleImages);
                _this.posters = _this.posters.concat(nextVisibleImages);
                _this.posters = prevVisibleImages.concat(_this.posters);
                _this.curIndex = _this.visibleSlides;
                _this.moveCounter = _this.visibleSlides * -1;
                console.log('this.posters', _this.posters);
            }
            else {
                _this.curIndex = 0;
                _this.moveCounter = 0;
            }
            _this.totalNumberOfSlides = _this.posters.length - 1;
            // this.images[0].isActive = true;
            // this.images[this.images.length].isActive = false;
            console.log('this.curIndex ', _this.curIndex);
            // this.setActive();
        }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    PosterSliderComponent.prototype.prev = function () {
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
    PosterSliderComponent.prototype.next = function () {
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PosterSliderComponent.prototype, "isInfinite", void 0);
    PosterSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-poster-slider',
            styleUrls: ['app/poster-slider.component.css'],
            templateUrl: 'app/poster-slider.component.html',
            directives: [common_1.NgClass, poster_component_1.PosterComponent],
            providers: [movies_service_1.MoviesService]
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], PosterSliderComponent);
    return PosterSliderComponent;
}());
exports.PosterSliderComponent = PosterSliderComponent;
//# sourceMappingURL=poster-slider.component.js.map