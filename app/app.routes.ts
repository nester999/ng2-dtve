import { provideRouter, RouterConfig } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { HeroSliderComponent } from './hero-slider.component';
import { PosterComponent } from './poster.component';
import { PosterSliderComponent } from './poster-slider.component';
import { LoginComponent } from './login.component';
import { ModalComponent } from './modal.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PosterSliderComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: HeroSliderComponent },
  { path: 'streaming', component: MoviesComponent },
  { path: 'sports', component: HeroSliderComponent },
  { path: 'music', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', component: PosterComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
