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
var core_1 = require('@angular/core');
var server_service_1 = require('./../service/server.service');
var itemCat = require('./donateItem');
var searchTemplate_component_1 = require('../template/searchTemplate.component');
var SearchItemComponent = (function (_super) {
    __extends(SearchItemComponent, _super);
    function SearchItemComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.category = itemCat.Category;
        this.categorySearch = itemCat.CategorySearch;
        this.categoryKey = itemCat.CategoryKey;
        this.dataList = new Array();
        this.primaryKey = '_id';
        this.parentUrl = this.serverService.getDonationUrl('');
    }
    SearchItemComponent.prototype.refreshClick = function () {
        this.cleanPage();
        this.refreshBut = true;
        //alert(test);
    };
    SearchItemComponent.prototype.importClick = function () {
        this.cleanPage();
        this.importBut = true;
    };
    SearchItemComponent.prototype.cleanPage = function () {
        this.refreshBut = false;
        this.importBut = false;
    };
    // TODO : check search key
    SearchItemComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt'
            ? Date.parse(this.searchWord).toString() : this.searchWord;
        var url = this.serverService.getDonationUrl(this.searchWord);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
        this.dealDate();
    };
    // process date for specific number
    SearchItemComponent.prototype.dealDate = function () {
        var splitArray = [];
        for (var i = 0; i < this.dataList.length; i++) {
            this.dataList[i]._id = this.dataList[i]._id.slice(-8);
        }
    };
    SearchItemComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) {
            return object.primaryKey == item[_this.primaryKey];
        })[0].checked = checked;
    };
    SearchItemComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchItemComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '品項類別') ? true : false;
    };
    SearchItemComponent = __decorate([
        core_1.Component({
            selector: 'searchItem',
            templateUrl: "app/donateItem/searchItem.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], SearchItemComponent);
    return SearchItemComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
exports.SearchItemComponent = SearchItemComponent;
//# sourceMappingURL=searchItem.component.js.map