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
var donor_1 = require('./donor');
var server_service_1 = require('../service/server.service');
var postSystem_service_1 = require('../service/postSystem.service');
var donorCat = require('./donor');
var AddDonaterComponent = (function () {
    function AddDonaterComponent(postSystemService, serverService) {
        this.postSystemService = postSystemService;
        this.serverService = serverService;
        this.isGroup = false;
        this.donor = new donor_1.Donor();
        this.category = [];
        this.area = [];
        this.category = donorCat.Category;
        this.area = donorCat.Area;
    }
    AddDonaterComponent.prototype.addDonorClick = function () {
        var donorObject = this.donor.getObject();
        console.log(donorObject);
        var url = this.serverService.getDonorUrl(this.donor.donor_name);
        console.log(url);
        this.postSystemService
            .postData(url, donorObject)
            .subscribe(function (data) { return swal('Congrations', data.success, 'success'); }, function (error) {
            var err = error.json();
            console.log(err.error);
        });
        this.donor = new donor_1.Donor();
    };
    AddDonaterComponent.prototype.catChange = function (value) {
        console.log(value);
        this.isGroup = (value === '團體') ? true : false;
    };
    AddDonaterComponent = __decorate([
        core_1.Component({
            selector: 'addDonater',
            templateUrl: "app/donateMember/addDonater.component.html"
        }), 
        __metadata('design:paramtypes', [postSystem_service_1.PostSystemService, server_service_1.ServerService])
    ], AddDonaterComponent);
    return AddDonaterComponent;
}());
exports.AddDonaterComponent = AddDonaterComponent;
//# sourceMappingURL=addDonater.component.js.map