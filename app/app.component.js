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
var router_1 = require('@angular/router');
var nav_component_1 = require('./nav.component');
var hero_slider_component_1 = require('./hero-slider.component');
var movies_service_1 = require('./movies.service');
var poster_component_1 = require('./poster.component');
var footer_component_1 = require('./footer.component');
var firebase_service_1 = require('./firebase.service');
var AppComponent = (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    AppComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.firebaseService.setUser(form.value.firstName, form.value.lastName)
            .subscribe(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onGetUser = function () {
        var _this = this;
        this.firebaseService.getUser()
            .subscribe(function (user) { return _this.getResponse = 'Get Response ' + JSON.stringify(user); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"wrapper\">\n    <ed-nav></ed-nav>\n    <ed-hero-slider></ed-hero-slider>\n    </div>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" ngControl=\"firstName\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" ngControl=\"lastName\">\n      <button type=\"submit\">Submit</button>\n      <button (click)=\"onGetUser()\">Get User</button>\n    </form>\n    <div class=\"container\" id=\"response\">Response: {{response}}</div>\n    <div class=\"container\" id=\"getResponse\">Get Response: {{getResponse}}</div>\n    <ed-footer></ed-footer>\n  ",
            providers: [movies_service_1.MoviesService, firebase_service_1.FirebaseService],
            directives: [nav_component_1.NavComponent,
                hero_slider_component_1.HeroSliderComponent,
                poster_component_1.PosterComponent,
                footer_component_1.FooterComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map