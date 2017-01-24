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
var updateTemplate_component_1 = require("./../template/updateTemplate.component");
var core_1 = require("@angular/core");
var server_service_1 = require("../service/server.service");
var donor_1 = require("./donor");
var itemCat = require("./donor");
var UpdateDonorComponent = (function (_super) {
    __extends(UpdateDonorComponent, _super);
    function UpdateDonorComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.isGroup = false;
        _this.category = itemCat.Category;
        _this.area = itemCat.Area;
        _this.donor = new donor_1.Donor();
        return _this;
    }
    UpdateDonorComponent.prototype.ngOnInit = function () {
        this.donor.pushData(this.inputItem);
    };
    UpdateDonorComponent.prototype.ngOnChanges = function () {
        this.donor.pushData(this.inputItem);
    };
    UpdateDonorComponent.prototype.sendClick = function () {
        var itemObject = this.donor.getObject();
        var url = this.serverService.getDonorUrl(this.donor.donor_name);
        this.Update(url, itemObject);
    };
    UpdateDonorComponent.prototype.catChange = function (value) {
        //alert(value);
        this.isGroup = (value === "團體") ? true : false;
    };
    return UpdateDonorComponent;
}(updateTemplate_component_1.UpdateTemplateComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UpdateDonorComponent.prototype, "inputItem", void 0);
UpdateDonorComponent = __decorate([
    core_1.Component({
        selector: 'updateDonor',
        templateUrl: "app/donor/updateDonor.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], UpdateDonorComponent);
exports.UpdateDonorComponent = UpdateDonorComponent;
//# sourceMappingURL=updateDonor.component.js.map