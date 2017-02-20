"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var updateTemplate_component_1 = require("./../template/updateTemplate.component");
var core_1 = require("@angular/core");
var server_service_1 = require("../service/server.service");
var user_1 = require("./user");
var itemCat = require("./user");
var UpdateUserComponent = (function (_super) {
    __extends(UpdateUserComponent, _super);
    function UpdateUserComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.updated = new core_1.EventEmitter();
        _this.area = itemCat.Area;
        _this.auth = itemCat.Auth;
        _this.user = new user_1.User();
        return _this;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        this.user.pushData(this.inputItem);
    };
    UpdateUserComponent.prototype.ngOnChanges = function () {
        this.user.pushData(this.inputItem);
    };
    UpdateUserComponent.prototype.sendClick = function () {
        var _this = this;
        var itemObject = this.user.getObject();
        var url = this.serverService.getUserUrl(this.user.user_name);
        this.Update(url, itemObject).then(function (data) {
            if (data)
                _this.updated.emit(true);
        });
    };
    UpdateUserComponent.prototype.clearClick = function () {
        this.updated.emit(false);
    };
    return UpdateUserComponent;
}(updateTemplate_component_1.UpdateTemplateComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UpdateUserComponent.prototype, "inputItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UpdateUserComponent.prototype, "updated", void 0);
UpdateUserComponent = __decorate([
    core_1.Component({
        selector: 'updateUser',
        templateUrl: "app/administrator/updateUser.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], UpdateUserComponent);
exports.UpdateUserComponent = UpdateUserComponent;
//# sourceMappingURL=updateUser.component.js.map