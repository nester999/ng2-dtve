import { provideRouter, RouterConfig } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { HeroSliderComponent } from './hero-slider.component';
import { PosterComponent } from './poster.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PosterComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: HeroSliderComponent },
  { path: 'streaming', component: MoviesComponent },
  { path: 'sports', component: HeroSliderComponent },
  { path: 'music', component: MoviesComponent },
  { path: '**', component: PosterComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
