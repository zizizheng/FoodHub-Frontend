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
var ExpiryComponent = (function () {
    function ExpiryComponent() {
        this.expiries = [
            { id: 1, date: '2016/02/28', name: '泡麵', quantity: 5 },
            { id: 2, date: '2016/02/10', name: '蘋果', quantity: 3 }
        ];
    }
    ExpiryComponent = __decorate([
        core_1.Component({
            selector: 'expiry',
            templateUrl: "app/expiry/expiry.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ExpiryComponent);
    return ExpiryComponent;
}());
exports.ExpiryComponent = ExpiryComponent;
//# sourceMappingURL=expiry.component.js.map