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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var login_component_1 = require('./login.component');
var expiry_component_1 = require('./expiry/expiry.component');
var donation_component_1 = require('./donation/donation.component');
var donor_component_1 = require('./donor/donor.component');
var donee_component_1 = require('./donee/donee.component');
var administrator_component_1 = require('./administrator/administrator.component');
// Item Page Components
var searchDonation_component_1 = require('./donation/searchDonation.component');
var giveDonation_component_1 = require('./donation/giveDonation.component');
var addDonation_component_1 = require('./donation/addDonation.component');
var updateDonation_component_1 = require('./donation/updateDonation.component');
var importDonation_component_1 = require('./donation/importDonation.component');
// Donater Page Components
var searchDonor_component_1 = require('./donor/searchDonor.component');
var addDonor_component_1 = require('./donor/addDonor.component');
var updateDonor_component_1 = require('./donor/updateDonor.component');
// Receiver Page Components
var searchDonee_component_1 = require('./donee/searchDonee.component');
var addDonee_component_1 = require('./donee/addDonee.component');
var updateDonee_component_1 = require('./donee/updateDonee.component');
// Addministrator Page Components
var searchUser_component_1 = require('./administrator/searchUser.component');
var addUser_component_1 = require('./administrator/addUser.component');
var editUser_component_1 = require('./administrator/editUser.component');
// Service
var login_service_1 = require('./service/login.service');
var server_service_1 = require('./service/server.service');
var postSystem_service_1 = require('./service/postSystem.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, expiry_component_1.ExpiryComponent, footer_component_1.MyFooterComponent,
                donation_component_1.DonationComponent, searchDonation_component_1.SearchDonationComponent, addDonation_component_1.AddDonationComponent, giveDonation_component_1.GiveDonationComponent,
                updateDonation_component_1.UpdateDonationComponent, importDonation_component_1.ImportDonationComponent, donor_component_1.DonorComponent, searchDonor_component_1.SearchDonorComponent,
                updateDonor_component_1.UpdateDonorComponent, addDonor_component_1.AddDonorComponent, donee_component_1.DoneeComponent,
                searchDonee_component_1.SearchDoneeComponent, addDonee_component_1.AddDoneeComponent, updateDonee_component_1.UpdateDoneeComponent,
                administrator_component_1.AdministratorComponent, searchUser_component_1.SearchUserComponent, addUser_component_1.AddUserComponent, editUser_component_1.EditUserComponent],
            providers: [login_service_1.LoginService, server_service_1.ServerService, postSystem_service_1.PostSystemService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map