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
var PosterComponent = (function () {
    function PosterComponent(moviesService) {
        this.moviesService = moviesService;
        //images data to be bound to the template
        this.posterImage = '';
        this.posterTitle = '';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PosterComponent.prototype, "posterImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PosterComponent.prototype, "posterTitle", void 0);
    PosterComponent = __decorate([
        core_1.Component({
            selector: 'ed-poster',
            styleUrls: ['app/poster.component.css'],
            templateUrl: 'app/poster.component.html',
            providers: [movies_service_1.MoviesService]
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], PosterComponent);
    return PosterComponent;
}());
exports.PosterComponent = PosterComponent;
//# sourceMappingURL=poster.component.js.map