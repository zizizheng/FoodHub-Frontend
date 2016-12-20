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
var postSystem_service_1 = require('../service/postSystem.service');
var server_service_1 = require('../service/server.service');
var user_1 = require('./user');
var userCat = require('./user');
var AddUserComponent = (function () {
    function AddUserComponent(postSystemService, serverService) {
        this.postSystemService = postSystemService;
        this.serverService = serverService;
        this.user = new user_1.User();
        this.area = [];
        this.authCat = [];
        this.area = userCat.Area;
        this.authCat = userCat.Auth;
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.addUserClick = function () {
        var userObject = this.user.getObject();
        console.log(userObject);
        var url = this.serverService.getUserUrl(this.user.account);
        console.log(url);
        this.postSystemService
            .postData(url, userObject)
            .subscribe(function (data) { return swal('Congrations', data.success, 'success'); }, function (error) {
            var err = error.json();
            console.log(err.error);
        });
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'addUser',
            templateUrl: "app/administrator/addUser.component.html"
        }), 
        __metadata('design:paramtypes', [postSystem_service_1.PostSystemService, server_service_1.ServerService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUser.component.js.map