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
        this.updateBut = false;
        this.importBut = false;
        this.delCheck = false;
        this.selectedBut = false;
        this.selectCat = false;
        this.searchWord = '';
        this.searchKey = '';
        this.delArray = [];
        this.category = [];
        this.categoryKey = [];
        this.categorySearch = [];
        this.dataList = [];
        this.primaryKey = '';
        this.parentUrl = '';
        this.getType = function (ele) {
            return Object.prototype.toString.call(ele);
        };
        this.postSystemService = injector.get(postSystem_service_1.PostSystemService);
    }
    SearchTemplateComponent.prototype.GetList = function (listUrl, primaryKey) {
        var _this = this;
        this.postSystemService
            .getDataList(listUrl)
            .subscribe(function (data) {
            if (_this.getType(data) === _this.getType([]))
                _this.dataList = data;
            else
                _this.dataList.push(data);
        }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            _this.putIntoChecklist(primaryKey);
            // console.log(this.dataList);
        });
    };
    SearchTemplateComponent.prototype.Search = function (url, urlParam) {
        var _this = this;
        this.postSystemService
            .getData(url, urlParam)
            .subscribe(function (data) {
            if (_this.getType(data) === _this.getType([]))
                _this.dataList = data;
            else
                _this.dataList.push(data);
        }, function (error) {
            var err = error.json();
            swal('Opps, something wrong!', err.error, 'warning');
        }, function () {
            // console.log(this.dataList);
            _this.putIntoChecklist(_this.primaryKey);
            _this.dealId();
        });
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
    SearchTemplateComponent.prototype.putIntoChecklist = function (primaryKey) {
        // clean array
        this.delArray = [];
        for (var _i = 0, _a = this.dataList; _i < _a.length; _i++) {
            var item = _a[_i];
            this.delArray.push({
                primaryKey: item[this.primaryKey],
                checked: false,
                url: this.parentUrl + item[this.primaryKey]
            });
        }
        console.log(this.delArray);
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
    SearchTemplateComponent.prototype.dealId = function () {
        if (this.getType(this.dataList) === this.getType([])) {
            for (var _i = 0, _a = this.dataList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item._id != undefined)
                    item._id = item._id.slice(-8);
            }
        }
    };
    SearchTemplateComponent = __decorate([
        core_1.Component({}), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], SearchTemplateComponent);
    return SearchTemplateComponent;
}());
exports.SearchTemplateComponent = SearchTemplateComponent;
//# sourceMappingURL=searchTemplate.component.js.map