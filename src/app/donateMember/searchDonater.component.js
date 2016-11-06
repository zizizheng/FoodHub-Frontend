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
var SearchDonaterComponent = (function () {
    function SearchDonaterComponent() {
        this.selectedBut = false;
    }
    SearchDonaterComponent.prototype.ngOnInit = function () { };
    SearchDonaterComponent.prototype.refreshClick = function () {
        this.selectedBut = true;
    };
    SearchDonaterComponent = __decorate([
        core_1.Component({
            selector: 'searchDonater',
            templateUrl: "app/donateMember/searchDonater.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchDonaterComponent);
    return SearchDonaterComponent;
}());
exports.SearchDonaterComponent = SearchDonaterComponent;
//# sourceMappingURL=searchDonater.component.js.map