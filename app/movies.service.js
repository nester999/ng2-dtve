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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
        this.apiKey = '?api_key=ecda3228e70942921f2177da1ff9ba5d';
        this.imgPath = 'http://image.tmdb.org/t/p/';
        this.baseUrl = 'http://api.themoviedb.org/3/';
        this.latestMoviesUrl = this.baseUrl + 'movie/latest/' + this.apiKey;
        this.rottenTomatoApiKey = '&apikey=uxc2rsd95jap7csscrbrr38h';
        this.rottenTomatoBaseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/';
        this.rottenTomatoPageLimit = '&page_limit=1&page=1';
        this.moviesSearch = 'movies.json?q=';
    }
    // getRandomQuote() {
    //   this.http.get(this.latestMoviesUrl)
    //     .map(res => res.text())
    //     .subscribe(
    //       data => this.latestMoviesUrl = data,
    //       err => this.handleError(err),
    //       () => console.log('latest movies Complete')
    //     );
    // }
    MoviesService.prototype.getLatestMovies = function () {
        return this.http.get(this.latestMoviesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MoviesService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MoviesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map