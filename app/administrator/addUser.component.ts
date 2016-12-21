import { Component, Injector } from '@angular/core';
import { ServerService } from '../service/server.service';
import { User } from './user';
import { AddTemplateComponent } from '../template/addTemplate.component';
import userCat = require('./user');

@Component({
  selector: 'addUser',
  templateUrl: `app/administrator/addUser.component.html`
})
export class AddUserComponent extends AddTemplateComponent {
    pack: any;
    user = new User();
    area = [];
    authCat = [];

    constructor(injector:Injector,
                private serverService: ServerService){
        super(injector);
        this.area = userCat.Area;
        this.authCat = userCat.Auth;
    }

    ngOnInit(): void{}

    addUserClick(){
      let userObject = this.user.getObject();
      let url = this.serverService.getUserUrl(this.user.account);
      this.Add(url, userObject);
    }
}
