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
var DoneeComponent = (function () {
    function DoneeComponent() {
        this.selectedBut = 'search';
    }
    DoneeComponent.prototype.ngOnInit = function () { };
    DoneeComponent.prototype.butClick = function (_selectedBut) {
        this.selectedBut = _selectedBut;
    };
    DoneeComponent = __decorate([
        core_1.Component({
            selector: 'donee',
            templateUrl: "app/donee/donee.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], DoneeComponent);
    return DoneeComponent;
}());
exports.DoneeComponent = DoneeComponent;
//# sourceMappingURL=donee.component.js.map