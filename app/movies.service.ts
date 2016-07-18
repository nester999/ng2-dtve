import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MoviesService {
  
  apiKey = '?api_key=ecda3228e70942921f2177da1ff9ba5d';
  imgPath = 'http://image.tmdb.org/t/p/';
  baseUrl = 'http://api.themoviedb.org/3/';
  latestMoviesUrl = this.baseUrl + 'movie/latest/' + this.apiKey;

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
  getLatestMovies(): Promise<string[]> {
    return this.http.get(this.latestMoviesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}