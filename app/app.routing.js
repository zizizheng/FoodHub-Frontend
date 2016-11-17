"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var expiry_component_1 = require('./expiry/expiry.component');
var donateItem_component_1 = require('./donateItem/donateItem.component');
var donateMember_component_1 = require('./donateMember/donateMember.component');
var receiveMember_component_1 = require('./receiveMember/receiveMember.component');
var administrator_component_1 = require('./administrator/administrator.component');
var appRoutes = [
    { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
    { path: 'loginPage', component: login_component_1.LoginComponent },
    { path: 'expiryPage', component: expiry_component_1.ExpiryComponent },
    { path: 'donateItemPage', component: donateItem_component_1.DonateItemComponent },
    { path: 'donateMemberPage', component: donateMember_component_1.DonateMemberComponent },
    { path: 'receiveMemberPage', component: receiveMember_component_1.ReceiveMemberComponent },
    { path: 'administratorPage', component: administrator_component_1.AdministratorComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map