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
var movies_service_1 = require('./movies.service');
var HeroSliderComponent = (function () {
    function HeroSliderComponent(moviesService) {
        this.moviesService = moviesService;
    }
    HeroSliderComponent.prototype.ngOnInit = function () {
        this.getBackdropImages();
    };
    HeroSliderComponent.prototype.getBackdropImages = function () {
        var _this = this;
        this.moviesService.getHeroImages()
            .subscribe(function (data) { return _this.images = data; }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    HeroSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-hero-slider',
            styleUrls: ['app/hero-slider.component.css'],
            templateUrl: 'app/hero-slider.component.html',
            providers: [movies_service_1.MoviesService]
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], HeroSliderComponent);
    return HeroSliderComponent;
}());
exports.HeroSliderComponent = HeroSliderComponent;
//# sourceMappingURL=hero-slider.component.js.map