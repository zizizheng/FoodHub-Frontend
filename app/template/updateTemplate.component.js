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
var postSystem_service_1 = require('./../service/postSystem.service');
var core_1 = require('@angular/core');
var UpdateTemplateComponent = (function () {
    function UpdateTemplateComponent(injector) {
        this.postSystemService = injector.get(postSystem_service_1.PostSystemService);
    }
    UpdateTemplateComponent.prototype.Update = function (url, urlParam) {
        this.postSystemService
            .postData(url, urlParam)
            .subscribe(function (data) { return swal('Updating Successed', data.success, 'success'); }, function (error) {
            var err = error.json();
            console.log(err.error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UpdateTemplateComponent.prototype, "item", void 0);
    UpdateTemplateComponent = __decorate([
        core_1.Component({}), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], UpdateTemplateComponent);
    return UpdateTemplateComponent;
}());
exports.UpdateTemplateComponent = UpdateTemplateComponent;
//# sourceMappingURL=updateTemplate.component.js.map