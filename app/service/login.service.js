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
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:8080/user/login/';
        this.loginName = undefined;
    }
    LoginService.prototype.recordLogin = function (name) {
        this.loginName = name;
        console.log('Here is service, login name is : ' + this.loginName);
        this.checkLogin();
    };
    LoginService.prototype.checkLogin = function () {
        console.log('Here is service, return name ' + this.loginName);
        return this.loginName;
    };
    LoginService.prototype.getData = function (name) {
        //console.log('login name = ' + name);
        //console.log(this.serverUrl + name);
        return this.http.get(this.serverUrl + name)
            .map(function (response) { return response.json(); });
    };
    LoginService.prototype.postData = function (name, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = { "password": password };
        //console.log('login name = ' + name);
        //console.log(this.serverUrl + name);
        return this.http.post(this.serverUrl + name, JSON.stringify(params), options)
            .map(function (response) { return response.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map