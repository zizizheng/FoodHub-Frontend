"use strict";
var login_service_1 = require('./service/login.service');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
core_1.enableProdMode();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [login_service_1.LoginService]);
//# sourceMappingURL=main.js.map