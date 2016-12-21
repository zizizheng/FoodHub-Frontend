import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './header.component';
import { MyFooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { DonationComponent } from './donation/donation.component';
import { DonorComponent } from './donor/donor.component';
import { DoneeComponent } from './donee/donee.component';
import { AdministratorComponent } from './administrator/administrator.component';

// Item Page Components
import { SearchDonationComponent } from './donation/searchDonation.component';
import { GiveDonationComponent } from './donation/giveDonation.component';
import { AddDonationComponent } from './donation/addDonation.component';
import { UpdateDonationComponent } from './donation/updateDonation.component';
import { ImportDonationComponent } from './donation/importDonation.component';

// Donater Page Components
import { SearchDonorComponent } from './donor/searchDonor.component';
import { AddDonorComponent } from './donor/addDonor.component';
import { UpdateDonorComponent } from './donor/updateDonor.component';

// Receiver Page Components
import { SearchDoneeComponent } from './donee/searchDonee.component';
import { AddDoneeComponent } from './donee/addDonee.component';
import { UpdateDoneeComponent } from './donee/updateDonee.component';

// Addministrator Page Components
import { SearchUserComponent } from './administrator/searchUser.component';
import { AddUserComponent } from './administrator/addUser.component';
import { EditUserComponent } from './administrator/editUser.component';

// Service
import { LoginService } from './service/login.service';
import { ServerService } from './service/server.service';
import { PostSystemService } from './service/postSystem.service';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                HttpModule,
                routing],
  declarations: [AppComponent, HeaderComponent, LoginComponent, ExpiryComponent, MyFooterComponent,
                DonationComponent, SearchDonationComponent, AddDonationComponent, GiveDonationComponent,
                UpdateDonationComponent, ImportDonationComponent, DonorComponent, SearchDonorComponent, 
                UpdateDonorComponent, AddDonorComponent, DoneeComponent,
                SearchDoneeComponent, AddDoneeComponent, UpdateDoneeComponent,
                AdministratorComponent, SearchUserComponent, AddUserComponent, EditUserComponent],
  providers: [ LoginService, ServerService, PostSystemService], 
  bootstrap: [ AppComponent ]

})
export class AppModule { }
