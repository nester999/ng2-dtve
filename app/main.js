"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
// import { appRouterProviders }   from './app.routes';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    // appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map