import { ContactComponent } from './contact/contact.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { DonationComponent } from './donation/donation.component';
import { DonorComponent } from './donor/donor.component';
import { DoneeComponent } from './donee/donee.component';
import { AdministratorComponent } from './administrator/administrator.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'loginPage', pathMatch: 'full' },
	{ path: 'loginPage', component: LoginComponent },
    { path: 'expiryPage', component: ExpiryComponent },
	{ path: 'donationPage', component: DonationComponent },
	{ path: 'donorPage', component: DonorComponent },
	{ path: 'doneePage', component: DoneeComponent },
	{ path: 'administratorPage', component: AdministratorComponent },
	{ path: 'contactPage', component: ContactComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
