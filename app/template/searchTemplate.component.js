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
var postSystem_service_1 = require('./../service/postSystem.service');
var core_1 = require('@angular/core');
var SearchTemplateComponent = (function () {
    function SearchTemplateComponent(injector) {
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
        this.primaryKey = '';
        this.parentUrl = '';
        this.postSystemService = injector.get(postSystem_service_1.PostSystemService);
    }
    SearchTemplateComponent.prototype.GetList = function (listUrl, primaryKey) {
        var _this = this;
        this.postSystemService
            .getDataList(listUrl)
            .subscribe(function (data) { return _this.dataList = data; }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.PutIntoChecklist(primaryKey, _this.parentUrl);
            // console.log(this.dataList);
        });
    };
    SearchTemplateComponent.prototype.Search = function (url, urlParam) {
        var _this = this;
        this.postSystemService
            .getData(url, urlParam)
            .subscribe(function (data) { return _this.dataList.push(data); }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.PutIntoChecklist(_this.primaryKey, url);
        });
    };
    SearchTemplateComponent.prototype.PutIntoChecklist = function (primaryKey, url) {
        // clean array
        this.delArray = [];
        for (var i = 0; i < this.dataList.length; i++) {
            this.delArray.push({
                primaryKey: this.dataList[i][primaryKey],
                checked: false,
                url: url + this.dataList[i][primaryKey]
            });
        }
        console.log(this.delArray);
    };
    SearchTemplateComponent.prototype.Delete = function () {
        var _this = this;
        this.delCheck = false;
        for (var _i = 0, _a = this.delArray; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.checked == true) {
                this.delCheck = true;
                break;
            }
        }
        //let that = this;
        if (this.delCheck) {
            swal({
                title: "確認刪除?",
                text: "被刪除的紀錄將不能復原",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "是的，確定刪除",
                cancelButtonText: "取消"
            }).then(function () {
                _this.deleteObject();
            });
        }
        else {
            swal("請勾選欲刪除的項目", "不然要刪空氣喔", "question");
        }
    };
    SearchTemplateComponent.prototype.deleteObject = function () {
        var _this = this;
        for (var _i = 0, _a = this.delArray; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.checked) {
                this.postSystemService
                    .deleteData(ob.url)
                    .subscribe(function (data) { return swal('Delete', data.success, 'success'); }, function (error) {
                    var err = error.json();
                    swal(err.error);
                }, function () {
                    // refresh form
                    _this.dataList = [];
                });
            }
        }
    };
    SearchTemplateComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
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
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "primaryKey", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchTemplateComponent.prototype, "parentUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', postSystem_service_1.PostSystemService)
    ], SearchTemplateComponent.prototype, "postSystemService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], SearchTemplateComponent.prototype, "GetList", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], SearchTemplateComponent.prototype, "Search", null);
    SearchTemplateComponent = __decorate([
        core_1.Component({
            selector: 'searchUser',
            templateUrl: "app/administrator/searchUser.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], SearchTemplateComponent);
    return SearchTemplateComponent;
}());
exports.SearchTemplateComponent = SearchTemplateComponent;
//# sourceMappingURL=searchTemplate.component.js.map