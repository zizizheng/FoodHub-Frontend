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
var server_service_1 = require("./../service/server.service");
var core_1 = require("@angular/core");
var userCat = require("./user");
var searchTemplate_component_1 = require("../template/searchTemplate.component");
var SearchUserComponent = (function (_super) {
    __extends(SearchUserComponent, _super);
    function SearchUserComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.categorySearch = userCat.CategorySearch;
        _this.categoryKey = userCat.CategoryKey;
        _this.dataList = new Array();
        _this.primaryKey = 'account';
        _this.listUrl = _this.serverService.getUserUrl('list');
        _this.parentUrl = _this.serverService.getUserUrl('');
        return _this;
    }
    SearchUserComponent.prototype.ngOnInit = function () {
        this.GetList(this.listUrl, this.primaryKey);
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
        //console.log(this.delArray.filter(object => object.primaryKey == item[this.primaryKey]));
        this.delArray.filter(function (object) { return object.primaryKey == item[_this.primaryKey]; })[0].checked = checked;
    };
    SearchUserComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchUserComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
        this.searchWord = '';
    };
    SearchUserComponent.prototype.editClick = function (user) {
        this.selectedItem = user;
        this.updateBut = true;
    };
    SearchUserComponent.prototype.notifyUpdate = function (isUpdate) {
        // console.log('got emit');
        if (isUpdate)
            this.GetList(this.listUrl, this.primaryKey);
        this.updateBut = false;
    };
    return SearchUserComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
SearchUserComponent = __decorate([
    core_1.Component({
        selector: 'searchUser',
        templateUrl: "app/administrator/searchUser.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], SearchUserComponent);
exports.SearchUserComponent = SearchUserComponent;
//# sourceMappingURL=searchUser.component.js.map