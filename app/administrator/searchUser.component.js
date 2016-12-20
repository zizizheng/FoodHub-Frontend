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
var userCat = require('./user');
var searchTemplate_component_1 = require('../template/searchTemplate.component');
var SearchUserComponent = (function (_super) {
    __extends(SearchUserComponent, _super);
    function SearchUserComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.categorySearch = userCat.CategorySearch;
        this.categoryKey = userCat.CategoryKey;
        this.dataList = new Array();
        this.primaryKey = 'account';
        this.parentUrl = this.serverService.getUserUrl('');
    }
    SearchUserComponent.prototype.ngOnInit = function () {
        var url = this.serverService.getUserUrl('list');
        this.GetList(url, this.primaryKey);
    };
    SearchUserComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getUserUrl(this.searchWord);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    };
    SearchUserComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        // console.log(this.delArray.filter(object => object.primaryKey == item[this.primaryKey]));
        this.delArray.filter(function (object) { return object.primaryKey == item[_this.primaryKey]; })[0].checked = checked;
    };
    SearchUserComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchUserComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
    };
    SearchUserComponent = __decorate([
        core_1.Component({
            selector: 'searchUser',
            templateUrl: "app/administrator/searchUser.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], SearchUserComponent);
    return SearchUserComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
exports.SearchUserComponent = SearchUserComponent;
//# sourceMappingURL=searchUser.component.js.map