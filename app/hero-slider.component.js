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
var HeroSliderComponent = (function () {
    function HeroSliderComponent() {
        //images data to be bound to the template
        this.images = IMAGES;
    }
    HeroSliderComponent = __decorate([
        core_1.Component({
            selector: 'ed-hero-slider',
            styleUrls: ['app/hero-slider.component.css'],
            templateUrl: 'app/hero-slider.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HeroSliderComponent);
    return HeroSliderComponent;
}());
exports.HeroSliderComponent = HeroSliderComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    { "title": "We are covered", "url": "http://www.placekitten.com/1200/400/" },
    { "title": "Generation Gap", "url": "http://www.placekitten.com/1200/400/" },
    { "title": "Potter Me", "url": "http://www.placekitten.com/1200/400/" },
    { "title": "Pre-School Kids", "url": "http://www.placekitten.com/1200/400/" },
    { "title": "Young Peter Cech", "url": "http://www.placekitten.com/1200/400/" }
];
//# sourceMappingURL=hero-slider.component.js.map