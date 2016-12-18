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
var server_service_1 = require('./../service/server.service');
var core_1 = require('@angular/core');
var postSystem_service_1 = require('../service/postSystem.service');
var doneeCat = require('./donee');
var SearchReceiverComponent = (function () {
    function SearchReceiverComponent(serverService, postSystemService) {
        this.serverService = serverService;
        this.postSystemService = postSystemService;
        this.refreshBut = false;
        this.importBut = false;
        this.delCheck = false;
        this.selectedBut = false;
        this.selectCat = false;
        this.searchWord = '';
        this.searchKey = '';
        this.delArray = [];
        this.category = [];
        this.categorySearch = [];
        this.categoryKey = [];
        this.category = doneeCat.Category;
        this.categorySearch = doneeCat.CategorySearch;
        this.categoryKey = doneeCat.CategoryKey;
        this.doneeList = new Array();
    }
    SearchReceiverComponent.prototype.searchClick = function () {
        var _this = this;
        this.doneeList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getDoneeUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(function (data) { return _this.doneeList.push(data); }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.putIntoChecklist();
            console.log(_this.doneeList);
        });
    };
    SearchReceiverComponent.prototype.putIntoChecklist = function () {
        // clean array
        this.delArray = [];
        for (var i = 0; i < this.doneeList.length; i++) {
            this.delArray.push({
                donee_name: this.doneeList[i].donee_name,
                checked: false
            });
        }
        // console.log(this.delArray);
    };
    SearchReceiverComponent.prototype.checkChange = function (item, checked) {
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) { return object.donee_name == item.donee_name; })[0].checked = checked;
    };
    SearchReceiverComponent.prototype.deleteClick = function () {
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
                _this.deleteDonee();
            });
        }
        else {
            swal("請勾選欲刪除的項目", "不然要刪空氣喔", "question");
        }
    };
    SearchReceiverComponent.prototype.deleteDonee = function () {
        var _this = this;
        for (var _i = 0, _a = this.delArray; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.checked) {
                this.postSystemService
                    .deleteData(this.serverService.getDoneeUrl(ob.donee_name))
                    .subscribe(function (data) { return swal('Delete', data.success, 'success'); }, function (error) {
                    var err = error.json();
                    swal(err.error);
                }, function () {
                    // refresh form
                    _this.doneeList = [];
                });
            }
        }
    };
    SearchReceiverComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '單位分類') ? true : false;
    };
    SearchReceiverComponent = __decorate([
        core_1.Component({
            selector: 'searchReceiver',
            templateUrl: "app/receiveMember/searchReceiver.component.html"
        }), 
        __metadata('design:paramtypes', [server_service_1.ServerService, postSystem_service_1.PostSystemService])
    ], SearchReceiverComponent);
    return SearchReceiverComponent;
}());
exports.SearchReceiverComponent = SearchReceiverComponent;
//# sourceMappingURL=searchReceiver.component.js.map