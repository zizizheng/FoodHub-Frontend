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
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var header_component_1 = require('./header.component');
var expiry_component_1 = require('./expiry.component');
var footer_component_1 = require('./footer.component');
var login_component_1 = require('./login.component');
var donateitem_component_1 = require('./donateItem/donateitem.component');
var receivemember_component_1 = require('./receiveMember/receivemember.component');
var administrator_component_1 = require('./administrator/administrator.component');
// Item Page Components
var searchitem_component_1 = require('./donateItem/searchitem.component');
var giveitem_component_1 = require('./donateItem/giveitem.component');
var additem_component_1 = require('./donateItem/additem.component');
var refreshitem_component_1 = require('./donateItem/refreshitem.component');
var importitem_component_1 = require('./donateItem/importitem.component');
// Donater Page Components
var searchDonater_component_1 = require('./donateMember/searchDonater.component');
var addDonater_component_1 = require('./donateMember/addDonater.component');
var updateDonater_component_1 = require('./donateMember/updateDonater.component');
// Receiver Page Components
var searchReceiver_component_1 = require('./receiveMember/searchReceiver.component');
var addReceiver_component_1 = require('./receiveMember/addReceiver.component');
var updateReceiver_component_1 = require('./receiveMember/updateReceiver.component');
// Addministrator Page Components
var searchUser_component_1 = require('./administrator/searchUser.component');
var addUser_component_1 = require('./administrator/addUser.component');
var editUser_component_1 = require('./administrator/editUser.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, expiry_component_1.ExpiryComponent, footer_component_1.MyFooterComponent,
                donateitem_component_1.DonateItemComponent, searchitem_component_1.SearchItemComponent, additem_component_1.AddItemComponent, giveitem_component_1.GiveItemComponent,
                refreshitem_component_1.RefreshItemComponent, importitem_component_1.ImportItemComponent, searchDonater_component_1.SearchDonaterComponent, updateDonater_component_1.UpdateDonaterComponent, addDonater_component_1.AddDonaterComponent, receivemember_component_1.ReceiveMemberComponent,
                searchReceiver_component_1.SearchReceiverComponent, addReceiver_component_1.AddReceiverComponent, updateReceiver_component_1.UpdateReceiverComponent,
                administrator_component_1.AdministratorComponent, searchUser_component_1.SearchUserComponent, addUser_component_1.AddUserComponent, editUser_component_1.EditUserComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map