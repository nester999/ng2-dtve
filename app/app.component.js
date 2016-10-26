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
var modal_component_1 = require('./modal.component');
var movies_service_1 = require('./movies.service');
var poster_component_1 = require('./poster.component');
var poster_slider_component_1 = require('./poster-slider.component');
var footer_component_1 = require('./footer.component');
var firebase_service_1 = require('./firebase.service');
var login_component_1 = require('./login.component');
var AppComponent = (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.infiniteHero = true;
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAv3KpPEHvE8PL2h2lRKjZu2o38VrPTYno",
            authDomain: "ng2-dtve.firebaseapp.com",
            databaseURL: "https://ng2-dtve.firebaseio.com",
            storageBucket: "ng2-dtve.appspot.com",
            messagingSenderId: "871792410831"
        };
        firebase.initializeApp(config);
        var root = firebase.database().ref('messages/2');
        root.on('value', function (snap) {
            console.log('snap key ', snap.key, ' snap val', snap.val());
        });
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
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [movies_service_1.MoviesService, firebase_service_1.FirebaseService],
            directives: [nav_component_1.NavComponent,
                hero_slider_component_1.HeroSliderComponent,
                poster_component_1.PosterComponent,
                poster_slider_component_1.PosterSliderComponent,
                footer_component_1.FooterComponent,
                router_1.ROUTER_DIRECTIVES
            ],
            precompile: [login_component_1.LoginComponent, poster_slider_component_1.PosterSliderComponent, modal_component_1.ModalComponent]
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map