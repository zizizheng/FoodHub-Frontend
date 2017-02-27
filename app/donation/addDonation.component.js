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
var common_1 = require("@angular/common");
var itemCat = require("./donation");
var AddDonationComponent = (function (_super) {
    __extends(AddDonationComponent, _super);
    function AddDonationComponent(injector, serverService, ref) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.ref = ref;
        _this.donations = [];
        _this.category = itemCat.Category;
        _this.area = itemCat.Warehouse;
        return _this;
    }
    AddDonationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dnUrl = this.serverService.getDonationUrl('');
        this.GetSpecificData(this.dnUrl + 'max_dnid')
            .then(function (data) { return _this.dn_id = data + 1; });
        this.donate_dt = new common_1.DatePipe().transform(Date.now(), 'yyyy-MM-dd');
        this.newRow();
    };
    AddDonationComponent.prototype.addDonation = function () {
        var comp = this;
        var url = this.dnUrl + this.dn_id;
        // console.log(this.dnUrl);
        this.donations.forEach(function (dn) {
            dn.donor_name = comp.donor_name;
            dn.donate_dt = comp.donate_dt;
            dn.memo = comp.memo;
            comp.Add(url, dn.getObject(), false);
            // console.log(dn.getObject());
        });
    };
    AddDonationComponent.prototype.cleanClick = function () {
        // this.item = new Donation();
    };
    // enterBarcode(e){
    //     $('#barcodeInput').removeClass('success fail');
    //     console.log(e.key);
    //     let comp = this;
    //     if(e.key == 'Enter'){
    //         let url = this.serverService.getBarcodeUrl(e.target.value);
    //         this.GetSpecificObject(url).then((res: Donation) => {
    //             this.item.item_name = res.item_name;
    //             this.item.item_unit = res.item_unit;
    //             this.item.item_unitprice = res.item_unitprice;
    //             $('#barcodeInput').addClass('success');
    //             setTimeout(function() {}, 2500);
    //         }).catch(function(e){
    //             // add warning to input
    //             console.log('oh fuck i cant find anything');
    //             $('#barcodeInput').addClass('fail');
    //         });
    //     }
    // }
    AddDonationComponent.prototype.newRow = function () {
        this.donations[this.donations.length] = new donation_1.Donation();
        this.ref.detectChanges();
        console.log(this.donations);
    };
    AddDonationComponent.prototype.delRow = function () {
        this.donations.pop();
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
        server_service_1.ServerService,
        core_1.ChangeDetectorRef])
], AddDonationComponent);
exports.AddDonationComponent = AddDonationComponent;
//# sourceMappingURL=addDonation.component.js.map