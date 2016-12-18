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
var postSystem_service_1 = require('../service/postSystem.service');
var server_service_1 = require('../service/server.service');
var core_1 = require('@angular/core');
var donorCat = require('./donor');
var SearchDonaterComponent = (function () {
    function SearchDonaterComponent(serverService, postSystemService) {
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
        this.area = [];
        this.category = [];
        this.categorySearch = [];
        this.categoryKey = [];
        this.area = donorCat.Area;
        this.category = donorCat.Category;
        this.categorySearch = donorCat.CategorySearch;
        this.categoryKey = donorCat.CategoryKey;
        this.donorList = new Array();
    }
    SearchDonaterComponent.prototype.searchClick = function () {
        var _this = this;
        this.donorList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getDonorUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(function (data) { return _this.donorList.push(data); }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.putIntoChecklist();
            // console.log(this.donorList);
        });
    };
    SearchDonaterComponent.prototype.putIntoChecklist = function () {
        // clean array
        this.delArray = [];
        for (var i = 0; i < this.donorList.length; i++) {
            this.delArray.push({
                donor_name: this.donorList[i].donor_name,
                checked: false
            });
        }
        // console.log(this.delArray);
    };
    SearchDonaterComponent.prototype.checkChange = function (item, checked) {
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.donor_name == item.donor_name));
        this.delArray.filter(function (object) { return object.donor_name == item.donor_name; })[0].checked = checked;
    };
    SearchDonaterComponent.prototype.deleteClick = function () {
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
                _this.deleteDonor();
            });
        }
        else {
            swal("請勾選欲刪除的項目", "不然要刪空氣喔", "question");
        }
    };
    SearchDonaterComponent.prototype.deleteDonor = function () {
        var _this = this;
        for (var _i = 0, _a = this.delArray; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.checked) {
                this.postSystemService
                    .deleteData(this.serverService.getDonorUrl(ob.donor_name))
                    .subscribe(function (data) { return swal('Delete', data.success, 'success'); }, function (error) {
                    var err = error.json();
                    swal(err.error);
                }, function () {
                    // refresh form
                    _this.donorList = [];
                });
            }
        }
    };
    SearchDonaterComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '分類') ? true : false;
    };
    SearchDonaterComponent = __decorate([
        core_1.Component({
            selector: 'searchDonater',
            templateUrl: "app/donateMember/searchDonater.component.html"
        }), 
        __metadata('design:paramtypes', [server_service_1.ServerService, postSystem_service_1.PostSystemService])
    ], SearchDonaterComponent);
    return SearchDonaterComponent;
}());
exports.SearchDonaterComponent = SearchDonaterComponent;
//# sourceMappingURL=searchDonater.component.js.map