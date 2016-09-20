import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ExpiryComponent } from './expiry.component';
import { DonateItemComponent } from './donateItem/donateitem.component';
import { DonateMemberComponent } from './donateMember/donatemember.component';

const appRoutes: Routes = [
	{ path: 'loginPage', component: LoginComponent },
	{ path: '', redirectTo: '/loginPage', pathMatch: 'full' },
    { path: 'expiryPage', component: ExpiryComponent },
	{ path: 'donateItemPage', component: DonateItemComponent },
	{ path: 'donateMemberPage', component: DonateMemberComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
