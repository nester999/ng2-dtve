"use strict";
var router_1 = require('@angular/router');
var movies_component_1 = require('./movies.component');
var hero_slider_component_1 = require('./hero-slider.component');
var poster_component_1 = require('./poster.component');
var poster_slider_component_1 = require('./poster-slider.component');
var login_component_1 = require('./login.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: poster_slider_component_1.PosterSliderComponent },
    { path: 'movies', component: movies_component_1.MoviesComponent },
    { path: 'tv', component: hero_slider_component_1.HeroSliderComponent },
    { path: 'streaming', component: movies_component_1.MoviesComponent },
    { path: 'sports', component: hero_slider_component_1.HeroSliderComponent },
    { path: 'music', component: movies_component_1.MoviesComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: poster_component_1.PosterComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map