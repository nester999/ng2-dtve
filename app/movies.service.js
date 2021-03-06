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
// import 'rxjs/add/operator/toPromise';
require('rxjs/add/operator/map');
var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
        this.apiKey = '?api_key=ecda3228e70942921f2177da1ff9ba5d';
        this.imgPath = 'http://image.tmdb.org/t/p/';
        this.baseUrl = 'http://api.themoviedb.org/3/';
        this.latestMoviesUrl = this.baseUrl + 'movie/latest' + this.apiKey;
        // backdrops = baseUrl + 'movie' + '/' + id + '/images' + apiKey
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
    MoviesService.prototype.getHeroImages = function () {
        var _this = this;
        // return this.http.get('http://api.themoviedb.org/3/movie/latest?api_key=ecda3228e70942921f2177da1ff9ba5d')
        return this.http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=ecda3228e70942921f2177da1ff9ba5d')
            .map(function (response) {
            console.log('response ', response.json());
            var _results = response.json().results;
            console.log('results ', _results);
            var heroImages = [];
            _results.forEach(function (movie, i) {
                var curImage = {
                    title: movie.title,
                    url: _this.imgPath + 'w1280' + movie.backdrop_path,
                    isActive: false
                };
                heroImages.push(curImage);
            });
            console.log('heroImages ', heroImages);
            return heroImages;
        });
    };
    MoviesService.prototype.getPosterImages = function () {
        var _this = this;
        // return this.http.get('http://api.themoviedb.org/3/movie/latest?api_key=ecda3228e70942921f2177da1ff9ba5d')
        return this.http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=ecda3228e70942921f2177da1ff9ba5d')
            .map(function (response) {
            console.log('response ', response.json());
            var _results = response.json().results;
            console.log('results ', _results);
            var posterImages = [];
            _results.forEach(function (movie, i) {
                var curImage = {
                    title: movie.title,
                    url: _this.imgPath + 'w185' + movie.poster_path,
                    isActive: false
                };
                posterImages.push(curImage);
            });
            console.log('posterImages ', posterImages);
            return posterImages;
        });
    };
    // getLatestMovies(): Promise<string[]> {
    //   return this.http.get(this.latestMoviesUrl)
    //              .toPromise()
    //              .then(response => response.json().data)
    //              .catch(this.handleError);
    // }
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