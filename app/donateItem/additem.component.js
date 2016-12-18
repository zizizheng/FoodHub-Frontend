// TODO : 新增後的跳窗
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
var donateItem_1 = require('./donateItem');
var server_service_1 = require('../service/server.service');
var itemCat = require('./donateItem');
var AddItemComponent = (function () {
    function AddItemComponent(postSystemService, serverService) {
        this.postSystemService = postSystemService;
        this.serverService = serverService;
        this.item = new donateItem_1.DonateItem();
        this.category = ['', '營養品', '沖泡品', '主食類', '罐頭', '生活用品', '零食', '調味品', '飲料', '生鮮食品', '其他'];
        this.area = itemCat.Warehouse;
    }
    AddItemComponent.prototype.ngOnInit = function () { };
    AddItemComponent.prototype.addItemClick = function () {
        var itemObject = this.item.getObject();
        var url = this.serverService.getDonationUrl(this.item._id);
        this.postSystemService
            .postData(url, itemObject)
            .subscribe(function (data) { return swal('Congrations', data.success, 'success'); }, function (error) {
            var err = error.json();
            console.log(err.error);
        });
    };
    AddItemComponent = __decorate([
        core_1.Component({
            selector: 'addItem',
            templateUrl: "app/donateItem/addItem.component.html",
        }), 
        __metadata('design:paramtypes', [postSystem_service_1.PostSystemService, server_service_1.ServerService])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=addItem.component.js.map