import { UpdateTemplateComponent } from './../template/updateTemplate.component';
import { Component, OnInit, Injector, OnChanges, Input } from '@angular/core';
import { ServerService } from '../service/server.service';
import { User } from './user';
import itemCat = require('./user');


@Component({
  selector: 'updateUser',
  templateUrl: `app/administrator/updateUser.component.html`
})
export class UpdateUserComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;

    user: User;
    area = itemCat.Area;
    auth = itemCat.Auth;
    authInChi = '';

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.user = new User();
    }

    ngOnInit(){
        this.user.pushData(this.inputItem);
        this.authInChi = (this.user.auth == "admin") ? "管理員": "一般使用者";
    }

    ngOnChanges(){
        this.user.pushData(this.inputItem);     
        this.authInChi = (this.user.auth == "admin") ? "管理員": "一般使用者";           
    }

    sendClick(){
        this.user.auth = (this.authInChi == "管理員") ? "admin": "user";
        let itemObject = this.user.getObject();
        let url = this.serverService.getUserUrl(this.user.user_name);
        this.Update(url, itemObject);
    }

}
