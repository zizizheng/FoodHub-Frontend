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
var server_service_1 = require("./../service/server.service");
var core_1 = require("@angular/core");
var searchTemplate_component_1 = require("../template/searchTemplate.component");
var doneeCat = require("./donee");
var SearchDoneeComponent = (function (_super) {
    __extends(SearchDoneeComponent, _super);
    function SearchDoneeComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.category = doneeCat.Category;
        _this.categorySearch = doneeCat.CategorySearch;
        _this.categoryKey = doneeCat.CategoryKey;
        _this.primaryKey = 'donee_name';
        _this.parentUrl = _this.serverService.getDoneeUrl('');
        _this.dataList = new Array();
        return _this;
    }
    SearchDoneeComponent.prototype.ngOnInit = function () {
        var url = this.serverService.getDoneeUrl('list');
        this.GetList(url, this.primaryKey);
    };
    SearchDoneeComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getDoneeUrl(this.searchWord);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    };
    SearchDoneeComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) { return object.primaryKey == item[_this.primaryKey]; })[0].checked = checked;
    };
    SearchDoneeComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchDoneeComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
        this.searchWord = '';
    };
    SearchDoneeComponent.prototype.updateClick = function (donee) {
        this.selectedItem = donee;
        this.selectedBut = true;
    };
    return SearchDoneeComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
SearchDoneeComponent = __decorate([
    core_1.Component({
        selector: 'searchDonee',
        templateUrl: "app/donee/searchDonee.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], SearchDoneeComponent);
exports.SearchDoneeComponent = SearchDoneeComponent;
//# sourceMappingURL=searchDonee.component.js.map