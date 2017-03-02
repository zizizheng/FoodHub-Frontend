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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./service/login.service");
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.account = '';
        this.password = '';
        this.isLogin = false;
        this.pack = undefined;
        this.userName = undefined;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userName = this.loginService.checkLogin();
        this.isLogin = (this.userName == undefined) ? false : true;
    };
    LoginComponent.prototype.loginClick = function () {
        var _this = this;
        //swal("Account : " + this.account + ", and Password : " + this.password);
        if (this.account == '' || this.password == '')
            swal('請輸入帳號密碼', '忘記帳密了嗎? 這功能也還沒實作QQ', 'warning');
        else {
            this.loginService.postData(this.account, this.password)
                .subscribe(function (data) { return _this.pack = data; }, function (error) {
                var err = error.json();
                swal('Error', err.error);
            }, function () {
                console.log(_this.pack);
                _this.loginService.recordLogin(_this.account);
                swal('Login Successed', 'Welcome to FoodBank, ' + _this.account);
                _this.router.navigate(['expiryPage']);
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'loginPage',
        templateUrl: 'app/login.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map