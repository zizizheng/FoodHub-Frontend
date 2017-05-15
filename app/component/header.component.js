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
var login_service_1 = require("../service/login.service");
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
        this.userName = 'Test';
        this.auth = 'admin';
    }
    HeaderComponent.prototype.ngOnInit = function () {
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
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-header',
        templateUrl: 'app/component/header.component.html',
        styleUrls: ['app/component/header.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map