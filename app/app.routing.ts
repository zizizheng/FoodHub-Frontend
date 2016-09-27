import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ExpiryComponent } from './expiry.component';
import { DonateItemComponent } from './donateItem/donateitem.component';
import { DonateMemberComponent } from './donateMember/donatemember.component';
import { ReceiveMemberComponent } from './receiveMember/receivemember.component';
import { AdministratorComponent } from './administrator/administrator.component';

const appRoutes: Routes = [
	{ path: 'loginPage', component: LoginComponent },
	{ path: '', redirectTo: '/loginPage', pathMatch: 'full' },
    { path: 'expiryPage', component: ExpiryComponent },
	{ path: 'donateItemPage', component: DonateItemComponent },
	{ path: 'donateMemberPage', component: DonateMemberComponent },
	{ path: 'receiveMemberPage', component: ReceiveMemberComponent },
	{ path: 'administratorPage', component: AdministratorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
