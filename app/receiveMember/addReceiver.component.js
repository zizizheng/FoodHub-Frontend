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
var donee_1 = require('./donee');
var core_1 = require('@angular/core');
var server_service_1 = require('../service/server.service');
var AddReceiverComponent = (function () {
    function AddReceiverComponent(postSystemService, serverService) {
        this.postSystemService = postSystemService;
        this.serverService = serverService;
        this.donee = new donee_1.Donee();
    }
    AddReceiverComponent.prototype.ngOnInit = function () { };
    AddReceiverComponent.prototype.addDoneeClick = function () {
        var doneeObject = this.donee.getObject();
        console.log(doneeObject);
        var url = this.serverService.getDoneeUrl(this.donee.donee_name);
        console.log(url);
        this.postSystemService
            .postData(url, doneeObject)
            .subscribe(function (data) { return swal('Congrations', data.success, 'success'); }, function (error) {
            var err = error.json();
            console.log(err.error);
        });
    };
    AddReceiverComponent = __decorate([
        core_1.Component({
            selector: 'addReceiver',
            templateUrl: "app/receiveMember/addReceiver.component.html"
        }), 
        __metadata('design:paramtypes', [postSystem_service_1.PostSystemService, server_service_1.ServerService])
    ], AddReceiverComponent);
    return AddReceiverComponent;
}());
exports.AddReceiverComponent = AddReceiverComponent;
//# sourceMappingURL=addReceiver.component.js.map