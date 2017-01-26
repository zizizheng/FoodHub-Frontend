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
var core_1 = require("@angular/core");
var donation_1 = require("./donation");
var updateTemplate_component_1 = require("../template/updateTemplate.component");
var server_service_1 = require("../service/server.service");
var itemCat = require("./donation");
var UpdateDonationComponent = (function (_super) {
    __extends(UpdateDonationComponent, _super);
    function UpdateDonationComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.category = itemCat.Category;
        _this.area = itemCat.Warehouse;
        _this.item = new donation_1.Donation();
        return _this;
    }
    UpdateDonationComponent.prototype.ngOnInit = function () {
        this.item.pushData(this.inputItem);
    };
    UpdateDonationComponent.prototype.ngOnChanges = function () {
        this.item.pushData(this.inputItem);
    };
    UpdateDonationComponent.prototype.sendClick = function () {
        var itemObject = this.item.getObject();
        var url = this.serverService.getDonationUrl(this.item._id);
        this.Update(url, itemObject);
    };
    return UpdateDonationComponent;
}(updateTemplate_component_1.UpdateTemplateComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UpdateDonationComponent.prototype, "inputItem", void 0);
UpdateDonationComponent = __decorate([
    core_1.Component({
        selector: 'updateDonation',
        templateUrl: "app/donation/updateDonation.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], UpdateDonationComponent);
exports.UpdateDonationComponent = UpdateDonationComponent;
//# sourceMappingURL=updateDonation.component.js.map