"use strict";
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
var postSystem_service_1 = require('../service/postSystem.service');
var server_service_1 = require('../service/server.service');
var SearchTemplateComponent = (function () {
    function SearchTemplateComponent() {
        this.refreshBut = false;
        this.importBut = false;
        this.delCheck = false;
        this.selectedBut = false;
        this.selectCat = false;
        this.searchWord = '';
        this.searchKey = '';
        this.delArray = [];
        this.categorySearch = [];
        this.categoryKey = [];
        this.dataList = [];
    }
    SearchTemplateComponent.prototype.searchClick = function () {
        var _this = this;
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getUserUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(function (data) { return _this.dataList.push(data); }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.putIntoChecklist();
            console.log(_this.dataList);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "refreshBut", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "importBut", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "delCheck", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "selectedBut", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "selectCat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "searchWord", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "searchKey", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "delArray", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "categorySearch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "categoryKey", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "dataList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', server_service_1.ServerService)
    ], SearchTemplateComponent.prototype, "serverService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', postSystem_service_1.PostSystemService)
    ], SearchTemplateComponent.prototype, "postSystemService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SearchTemplateComponent.prototype, "searchClick", null);
    SearchTemplateComponent = __decorate([
        core_1.Component({
            selector: 'searchUser',
            templateUrl: "app/administrator/searchUser.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchTemplateComponent);
    return SearchTemplateComponent;
}());
exports.SearchTemplateComponent = SearchTemplateComponent;
//# sourceMappingURL=searhTemplate.component.js.map