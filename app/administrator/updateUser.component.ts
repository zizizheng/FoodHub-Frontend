import { UpdateTemplateComponent } from './../template/updateTemplate.component';
import { Component, OnInit, Injector, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../service/server.service';
import { User } from './user';
import itemCat = require('./user');


@Component({
  selector: 'updateUser',
  templateUrl: `app/administrator/updateUser.component.html`
})
export class UpdateUserComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    user: User;
    area = itemCat.Area;
    auth = itemCat.Auth;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.user = new User();
    }

    ngOnInit(){
        this.user.pushData(this.inputItem);
    }

    ngOnChanges(){
        this.user.pushData(this.inputItem);               
    }

    sendClick(){
        let itemObject = this.user.getObject();
        let url = this.serverService.getUserUrl(this.user.user_name);
        this.Update(url, itemObject).then(
            (data) => {
                if(data) this.updated.emit(true);
            }
        );
    }

    clearClick(){
        this.updated.emit(false);
    }

}
