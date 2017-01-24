"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var addTemplate_component_1 = require("./../template/addTemplate.component");
var core_1 = require("@angular/core");
var server_service_1 = require("../service/server.service");
var user_1 = require("./user");
var userCat = require("./user");
var AddUserComponent = (function (_super) {
    __extends(AddUserComponent, _super);
    function AddUserComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.user = new user_1.User();
        _this.area = [];
        _this.authCat = [];
        _this.area = userCat.Area;
        _this.authCat = userCat.Auth;
        return _this;
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.addUserClick = function () {
        var userObject = this.user.getObject();
        var url = this.serverService.getUserUrl(this.user.account);
        this.Add(url, userObject);
    };
    return AddUserComponent;
}(addTemplate_component_1.AddTemplateComponent));
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'addUser',
        templateUrl: "app/administrator/addUser.component.html",
        styleUrls: ['app/template/addTemplate.component.css']
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUser.component.js.map