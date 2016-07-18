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
var nav_component_1 = require('./nav.component');
var hero_slider_component_1 = require('./hero-slider.component');
var movies_service_1 = require('./movies.service');
var AppComponent = (function () {
    function AppComponent(moviesService) {
        this.moviesService = moviesService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getLatestMovies();
    };
    AppComponent.prototype.getLatestMovies = function () {
        var _this = this;
        this.latestMovies = this.moviesService.getLatestMovies();
        this.moviesService.getLatestMovies().then(function (latestMovies) { _this.latestMovies = latestMovies; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <ed-nav></ed-nav>\n    <ed-hero-slider></ed-hero-slider>\n    <span>{{latestMovies}}</span>\n  ",
            providers: [movies_service_1.MoviesService],
            directives: [nav_component_1.NavComponent,
                hero_slider_component_1.HeroSliderComponent
            ]
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map