import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './header.component';
import { ExpiryComponent } from './expiry.component';
import { MyFooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { DonateItemComponent } from './donateItem/donateitem.component';
import { DonateMemberComponent } from './donateMember/donatemember.component';

// Item Page Components
import { SearchItemComponent } from './donateItem/searchitem.component';
import { GiveItemComponent } from './donateItem/giveitem.component';
import { AddItemComponent } from './donateItem/additem.component';
import { RefreshItemComponent } from './donateItem/refreshitem.component';
import { ImportItemComponent } from './donateItem/importitem.component';

// Member Page Components
import { SearchMemberComponent } from './donateMember/searchmember.component';
import { AddMemberComponent} from './donateMember/addmember.component';
import { RefreshMemberComponent } from './donateMember/refreshmember.component';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                routing],
  declarations: [AppComponent, HeaderComponent, LoginComponent, ExpiryComponent, MyFooterComponent,
                DonateItemComponent, SearchItemComponent, AddItemComponent, GiveItemComponent,
                RefreshItemComponent, ImportItemComponent, SearchMemberComponent, RefreshMemberComponent, AddMemberComponent],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
