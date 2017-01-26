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
var donation_1 = require("./donation");
var core_1 = require("@angular/core");
var server_service_1 = require("../service/server.service");
var addTemplate_component_1 = require("../template/addTemplate.component");
var itemCat = require("./donation");
var AddDonationComponent = (function (_super) {
    __extends(AddDonationComponent, _super);
    function AddDonationComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.item = new donation_1.Donation();
        _this.category = itemCat.Category;
        _this.area = itemCat.Warehouse;
        return _this;
    }
    AddDonationComponent.prototype.addItemClick = function () {
        var itemObject = this.item.getObject();
        var url = this.serverService.getDonationUrl(this.item._id);
        this.Add(url, itemObject);
    };
    AddDonationComponent.prototype.cleanClick = function () {
        this.item = new donation_1.Donation();
    };
    AddDonationComponent.prototype.enterBarcode = function (e) {
        var _this = this;
        console.log(e.key);
        var comp = this;
        if (e.key == 'Enter') {
            var url = this.serverService.getBarcodeUrl(e.target.value);
            this.GetSpecificObject(url).then(function (res) {
                _this.item.item_name = res.item_name;
                _this.item.item_unit = res.item_unit;
                _this.item.item_unitprice = res.item_unitprice;
            }).catch(function (e) {
                // add warning to input
                console.log('oh fuck i cant find anything');
            });
        }
    };
    return AddDonationComponent;
}(addTemplate_component_1.AddTemplateComponent));
AddDonationComponent = __decorate([
    core_1.Component({
        selector: 'addDonation',
        templateUrl: "app/donation/addDonation.component.html",
        styleUrls: ['app/template/addTemplate.component.css']
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], AddDonationComponent);
exports.AddDonationComponent = AddDonationComponent;
//# sourceMappingURL=addDonation.component.js.map