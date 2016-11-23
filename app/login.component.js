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
var http_service_1 = require('./http.service');
var LoginComponent = (function () {
    function LoginComponent(router, httpService) {
        this.router = router;
        this.httpService = httpService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData()
            .subscribe(function (data) { return _this.curTime = data; }, function (error) { return alert(error); }, function () { return alert(_this.curTime.milliseconds_since_epoch); });
    };
    LoginComponent.prototype.loginClick = function () {
        this.router.navigate(['expiryPage']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'loginPage',
            templateUrl: 'app/login.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_service_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map