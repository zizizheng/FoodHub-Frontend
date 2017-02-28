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
var server_service_1 = require("./../service/server.service");
var itemCat = require("./donation");
var searchTemplate_component_1 = require("../template/searchTemplate.component");
var updateDonation_component_1 = require("./updateDonation.component");
var SearchDonationComponent = (function (_super) {
    __extends(SearchDonationComponent, _super);
    function SearchDonationComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.category = itemCat.Category;
        _this.categorySearch = itemCat.CategorySearch;
        _this.categoryKey = itemCat.CategoryKey;
        _this.dataList = new Array();
        _this.primaryKey = 'dn_id';
        _this.parentUrl = _this.serverService.getDonationUrl('');
        _this.listUrl = _this.serverService.getDonationUrl('list');
        _this.giveBut = false;
        _this.exList = [];
        return _this;
    }
    SearchDonationComponent.prototype.ngOnInit = function () {
        this.GetList(this.listUrl, this.primaryKey);
    };
    SearchDonationComponent.prototype.giveClick = function (exDn) {
        this.exList.push({
            dn_id: exDn.dn_id,
            name: exDn.item_name,
            qt: exDn.item_qt,
            item_unit: exDn.item_unit
        });
        // console.log(this.exList);
    };
    SearchDonationComponent.prototype.updateClick = function (item) {
        this.cleanPage();
        this.selectedItem = item;
        this.updateBut = true;
    };
    SearchDonationComponent.prototype.cleanPage = function () {
        this.updateBut = false;
    };
    // TODO : check search key
    SearchDonationComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt'
            ? Date.parse(this.searchWord).toString() : this.searchWord;
        var url = this.serverService.getDonationUrl(this.searchWord);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    };
    SearchDonationComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) {
            return object.primaryKey == item[_this.primaryKey];
        })[0].checked = checked;
        console.log(this.delArray);
    };
    SearchDonationComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchDonationComponent.prototype.searchChange = function (value) {
        if (value === '品項類別' || value === '倉庫地區') {
            this.category = (value === '品項類別') ? itemCat.Category : itemCat.Warehouse;
            this.selectCat = true;
            this.searchWord = '';
        }
        else
            this.selectCat = false;
    };
    SearchDonationComponent.prototype.notifyUpdate = function (isUpdate) {
        // console.log('got emit');
        if (isUpdate) {
            this.GetList(this.listUrl, this.primaryKey);
        }
        this.updateBut = false;
    };
    return SearchDonationComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
SearchDonationComponent = __decorate([
    core_1.Component({
        selector: 'searchDonation',
        templateUrl: "app/donation/searchDonation.component.html",
        directives: [updateDonation_component_1.UpdateDonationComponent]
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], SearchDonationComponent);
exports.SearchDonationComponent = SearchDonationComponent;
//# sourceMappingURL=searchDonation.component.js.map