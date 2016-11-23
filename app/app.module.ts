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
import { DonateItemComponent } from './donateItem/donateItem.component';
import { DonateMemberComponent } from './donateMember/donateMember.component';
import { ReceiveMemberComponent } from './receiveMember/receiveMember.component';
import { AdministratorComponent } from './administrator/administrator.component';

// Item Page Components
import { SearchItemComponent } from './donateItem/searchItem.component';
import { GiveItemComponent } from './donateItem/giveItem.component';
import { AddItemComponent } from './donateItem/addItem.component';
import { RefreshItemComponent } from './donateItem/refreshItem.component';
import { ImportItemComponent } from './donateItem/importItem.component';

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
  imports:      [ BrowserModule,
                FormsModule,
                HttpModule,
                routing],
  declarations: [AppComponent, HeaderComponent, LoginComponent, ExpiryComponent, MyFooterComponent,
                DonateItemComponent, SearchItemComponent, AddItemComponent, GiveItemComponent,
                RefreshItemComponent, ImportItemComponent, DonateMemberComponent, SearchDonaterComponent, UpdateDonaterComponent, AddDonaterComponent, ReceiveMemberComponent,
                SearchReceiverComponent, AddReceiverComponent, UpdateReceiverComponent,
                AdministratorComponent, SearchUserComponent, AddUserComponent, EditUserComponent],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
