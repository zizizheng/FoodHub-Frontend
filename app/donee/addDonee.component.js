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
var addTemplate_component_1 = require('./../template/addTemplate.component');
var donee_1 = require('./donee');
var core_1 = require('@angular/core');
var server_service_1 = require('../service/server.service');
var doneeCat = require('./donee');
var AddDoneeComponent = (function (_super) {
    __extends(AddDoneeComponent, _super);
    function AddDoneeComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.donee = new donee_1.Donee();
        this.category = [];
        this.category = doneeCat.Category;
    }
    AddDoneeComponent.prototype.addDoneeClick = function () {
        var doneeObject = this.donee.getObject();
        var url = this.serverService.getDoneeUrl(this.donee.donee_name);
        this.Add(url, doneeObject);
    };
    AddDoneeComponent.prototype.cleanClick = function () {
        this.donee = new donee_1.Donee();
    };
    AddDoneeComponent = __decorate([
        core_1.Component({
            selector: 'addDonee',
            templateUrl: "app/donee/addDonee.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], AddDoneeComponent);
    return AddDoneeComponent;
}(addTemplate_component_1.AddTemplateComponent));
exports.AddDoneeComponent = AddDoneeComponent;
//# sourceMappingURL=addDonee.component.js.map