"use strict";
var router_1 = require('@angular/router');
var movies_component_1 = require('./movies.component');
var hero_slider_component_1 = require('./hero-slider.component');
var poster_component_1 = require('./poster.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: poster_component_1.PosterComponent },
    { path: 'movies', component: movies_component_1.MoviesComponent },
    { path: 'tv', component: hero_slider_component_1.HeroSliderComponent },
    { path: 'streaming', component: movies_component_1.MoviesComponent },
    { path: 'sports', component: hero_slider_component_1.HeroSliderComponent },
    { path: 'music', component: movies_component_1.MoviesComponent },
    { path: '**', component: poster_component_1.PosterComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map