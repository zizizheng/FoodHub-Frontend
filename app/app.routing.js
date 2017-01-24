"use strict";
var contact_component_1 = require("./contact/contact.component");
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var expiry_component_1 = require("./expiry/expiry.component");
var donation_component_1 = require("./donation/donation.component");
var donor_component_1 = require("./donor/donor.component");
var donee_component_1 = require("./donee/donee.component");
var administrator_component_1 = require("./administrator/administrator.component");
var appRoutes = [
    { path: '', redirectTo: 'loginPage', pathMatch: 'full' },
    { path: 'loginPage', component: login_component_1.LoginComponent },
    { path: 'expiryPage', component: expiry_component_1.ExpiryComponent },
    { path: 'donationPage', component: donation_component_1.DonationComponent },
    { path: 'donorPage', component: donor_component_1.DonorComponent },
    { path: 'doneePage', component: donee_component_1.DoneeComponent },
    { path: 'administratorPage', component: administrator_component_1.AdministratorComponent },
    { path: 'contactPage', component: contact_component_1.ContactComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map