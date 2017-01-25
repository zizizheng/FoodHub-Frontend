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
var login_service_1 = require("./service/login.service");
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        this.isScrolled = false;
        this.recPos = 0;
        this.lastPos = 0;
        this.prePos = 0;
        this.Disappear = 200;
        loginService.nameChange$.subscribe(function (name) { return _this.userName = name; });
        this.userName = '使用者';
    }
    HeaderComponent.prototype.updateHeader = function () {
        var com = this;
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            // console.log(st);
            if (st - com.prePos < 0) {
                $('#Header').fadeIn(300);
                com.recPos = 0;
            }
            else {
                com.recPos += st - com.prePos;
                if (com.recPos > com.Disappear) {
                    $('#Header').fadeOut(300);
                }
            }
            com.prePos = st;
        });
        // if(window.pageYOffset - this.prePos < 0){
        // 	this.isScrolled = false;
        // }
        // else {
        // 	this.recPos += window.pageYOffset - this.prePos;
        // 	if (this.recPos > this.Disappear){
        // 		this.isScrolled = true;
        // 		this.lastPos = window.pageYOffset;
        // 	}
        // }
        // this.prePos = window.pageYOffset;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-header',
        templateUrl: 'app/header.component.html',
        styleUrls: ['app/header.component.css'],
        host: {
            '(window:scroll)': 'updateHeader()'
        }
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map