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
require('rxjs/Rx');
var FirebaseService = (function () {
    function FirebaseService(http) {
        this.http = http;
    }
    FirebaseService.prototype.setUser = function (firstName, lastName) {
        var body = JSON.stringify({ firstName: firstName, lastName: lastName });
        return this.http.put('https://ng2-dtve.firebaseio.com/user.json', body)
            .map(function (response) { return response.json(); });
    };
    FirebaseService.prototype.getUser = function () {
        return this.http.get('https://ng2-dtve.firebaseio.com/user.json')
            .map(function (response) { return response.json(); });
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map