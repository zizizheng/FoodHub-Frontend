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
var server_service_1 = require('./../service/server.service');
var core_1 = require('@angular/core');
var searchTemplate_component_1 = require('../template/searchTemplate.component');
var doneeCat = require('./donee');
var SearchReceiverComponent = (function (_super) {
    __extends(SearchReceiverComponent, _super);
    function SearchReceiverComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.category = doneeCat.Category;
        this.categorySearch = doneeCat.CategorySearch;
        this.categoryKey = doneeCat.CategoryKey;
        this.primaryKey = 'donee_name';
        this.parentUrl = this.serverService.getDoneeUrl('');
        this.dataList = new Array();
    }
    SearchReceiverComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getDoneeUrl(this.searchWord);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    };
    SearchReceiverComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) { return object.primaryKey == item[_this.primaryKey]; })[0].checked = checked;
    };
    SearchReceiverComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchReceiverComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
    };
    SearchReceiverComponent = __decorate([
        core_1.Component({
            selector: 'searchReceiver',
            templateUrl: "app/receiveMember/searchReceiver.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], SearchReceiverComponent);
    return SearchReceiverComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
exports.SearchReceiverComponent = SearchReceiverComponent;
//# sourceMappingURL=searchReceiver.component.js.map