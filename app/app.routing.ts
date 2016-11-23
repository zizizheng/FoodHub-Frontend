import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { DonateItemComponent } from './donateItem/donateItem.component';
import { DonateMemberComponent } from './donateMember/donateMember.component';
import { ReceiveMemberComponent } from './receiveMember/receiveMember.component';
import { AdministratorComponent } from './administrator/administrator.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'loginPage', pathMatch: 'full' },
	{ path: 'loginPage', component: LoginComponent },
    { path: 'expiryPage', component: ExpiryComponent },
	{ path: 'donateItemPage', component: DonateItemComponent },
	{ path: 'donateMemberPage', component: DonateMemberComponent },
	{ path: 'receiveMemberPage', component: ReceiveMemberComponent },
	{ path: 'administratorPage', component: AdministratorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
