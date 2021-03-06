import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Image} from './image.interface';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {
  
  apiKey = '?api_key=ecda3228e70942921f2177da1ff9ba5d';
  imgPath = 'http://image.tmdb.org/t/p/';
  baseUrl = 'http://api.themoviedb.org/3/';
  latestMoviesUrl = this.baseUrl + 'movie/latest' + this.apiKey;
  // backdrops = baseUrl + 'movie' + '/' + id + '/images' + apiKey

  rottenTomatoApiKey = '&apikey=uxc2rsd95jap7csscrbrr38h';
  rottenTomatoBaseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/';
  rottenTomatoPageLimit = '&page_limit=1&page=1';
  moviesSearch = 'movies.json?q=';

  constructor(private http: Http) { }

  // getRandomQuote() {
  //   this.http.get(this.latestMoviesUrl)
  //     .map(res => res.text())
  //     .subscribe(
  //       data => this.latestMoviesUrl = data,
  //       err => this.handleError(err),
  //       () => console.log('latest movies Complete')
  //     );
  // }

  getHeroImages() {
    // return this.http.get('http://api.themoviedb.org/3/movie/latest?api_key=ecda3228e70942921f2177da1ff9ba5d')
    return this.http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=ecda3228e70942921f2177da1ff9ba5d')
      .map(response => {
        console.log('response ', response.json());
        var _results = response.json().results;
        console.log('results ', _results)
        var heroImages: Image[] = [];
        _results.forEach((movie, i) => {
          var curImage: Image = {
            title: movie.title,
            url: this.imgPath + 'w1280' + movie.backdrop_path,
            isActive: false
          };

          heroImages.push(curImage);
        });
        console.log('heroImages ', heroImages);
        return heroImages;
      })
  }

  getPosterImages() {
    // return this.http.get('http://api.themoviedb.org/3/movie/latest?api_key=ecda3228e70942921f2177da1ff9ba5d')
    return this.http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=ecda3228e70942921f2177da1ff9ba5d')
      .map(response => {
        console.log('response ', response.json());
        var _results = response.json().results;
        console.log('results ', _results)
        var posterImages: Image[] = [];
        _results.forEach((movie, i) => {
          var curImage: Image = {
            title: movie.title,
            url: this.imgPath + 'w185' + movie.poster_path,
            isActive: false
          };

          posterImages.push(curImage);
        });
        console.log('posterImages ', posterImages);
        return posterImages;
      })
  }

  // getLatestMovies(): Promise<string[]> {
  //   return this.http.get(this.latestMoviesUrl)
  //              .toPromise()
  //              .then(response => response.json().data)
  //              .catch(this.handleError);
  // }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}