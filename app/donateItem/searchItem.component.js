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
var server_service_1 = require('./../service/server.service');
//global constants
var itemCat = require('./donateItem');
var SearchItemComponent = (function () {
    function SearchItemComponent(postSystemService, serverService) {
        this.postSystemService = postSystemService;
        this.serverService = serverService;
        this.refreshBut = false;
        this.importBut = false;
        this.searchWord = '';
        this.searchKey = '';
        this.category = [];
        this.categoryKey = [];
        this.delArray = [];
        this.delCheck = false;
        this.category = itemCat.Category;
        this.categoryKey = itemCat.CategoryKey;
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
        var _this = this;
        var keyIndex = this.category.indexOf(this.searchKey);
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt'
            ? Date.parse(this.searchWord).toString() : this.searchWord;
        var url = this.serverService.getDonationUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(function (data) { return _this.itemList = data; }, function (error) {
            var err = error.json();
            swal(err.error);
        }, function () {
            _this.dealDate();
            _this.putIntoChecklist();
        });
    };
    SearchItemComponent.prototype.dealDate = function () {
        var splitArray = [];
        for (var i = 0; i < this.itemList.length; i++) {
            this.itemList[i]._id = this.itemList[i]._id.slice(-8);
        }
    };
    SearchItemComponent.prototype.putIntoChecklist = function () {
        // clean array
        this.delArray = [];
        for (var i = 0; i < this.itemList.length; i++) {
            this.delArray.push({
                id: this.itemList[i]._id,
                checked: false
            });
        }
        // console.log(this.delArray);
    };
    SearchItemComponent.prototype.checkChange = function (item, checked) {
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) { return object.id == item._id; })[0].checked = checked;
    };
    SearchItemComponent.prototype.deleteClick = function () {
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
                cancelButtonText: "取消",
                closeOnConfirm: false
            }, function () {
                _this.deleteItem();
            });
        }
        else {
            swal("請勾選欲刪除的項目");
        }
    };
    SearchItemComponent.prototype.deleteItem = function () {
        var _this = this;
        for (var _i = 0, _a = this.delArray; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.checked) {
                this.postSystemService
                    .deleteData(this.serverService.getDonationUrl(ob.id))
                    .subscribe(function (data) { return swal('Delete', data.success, 'success'); }, function (error) {
                    var err = error.json();
                    swal(err.error);
                }, function () {
                    // refresh form
                    _this.searchClick();
                });
            }
        }
    };
    SearchItemComponent = __decorate([
        core_1.Component({
            selector: 'searchItem',
            templateUrl: "app/donateItem/searchItem.component.html",
        }), 
        __metadata('design:paramtypes', [postSystem_service_1.PostSystemService, server_service_1.ServerService])
    ], SearchItemComponent);
    return SearchItemComponent;
}());
exports.SearchItemComponent = SearchItemComponent;
//# sourceMappingURL=searchItem.component.js.map