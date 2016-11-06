import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './header.component';
import { ExpiryComponent } from './expiry.component';
import { MyFooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { DonateItemComponent } from './donateItem/donateitem.component';
import { DonateMemberComponent } from './donateMember/donatemember.component';
import { ReceiveMemberComponent } from './receiveMember/receivemember.component';
import { AdministratorComponent } from './administrator/administrator.component';

// Item Page Components
import { SearchItemComponent } from './donateItem/searchitem.component';
import { GiveItemComponent } from './donateItem/giveitem.component';
import { AddItemComponent } from './donateItem/additem.component';
import { RefreshItemComponent } from './donateItem/refreshitem.component';
import { ImportItemComponent } from './donateItem/importitem.component';

// Donater Page Components
import { SearchDonaterComponent } from './donateMember/searchDonater.component';
import { AddDonaterComponent } from './donateMember/addDonater.component';
import { UpdateDonaterComponent } from './donateMember/updateDonater.component';

// Receiver Page Components
import { SearchReceiverComponent } from './receiveMember/searchReceiver.component';
import { AddReceiverComponent } from './receiveMember/addReceiver.component';
import { UpdateReceiverComponent } from './receiveMember/updateReceiver.component';

// Addministrator Page Components
import { SearchUserComponent } from './administrator/searchUser.component';
import { AddUserComponent } from './administrator/addUser.component';
import { EditUserComponent } from './administrator/editUser.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    routing],
  declarations: [AppComponent, HeaderComponent, LoginComponent, ExpiryComponent, MyFooterComponent,DonateMemberComponent,
    DonateItemComponent, SearchItemComponent, AddItemComponent, GiveItemComponent,
    RefreshItemComponent, ImportItemComponent, SearchDonaterComponent, UpdateDonaterComponent, AddDonaterComponent, ReceiveMemberComponent,
    SearchReceiverComponent, AddReceiverComponent, UpdateReceiverComponent,
    AdministratorComponent, SearchUserComponent, AddUserComponent, EditUserComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
