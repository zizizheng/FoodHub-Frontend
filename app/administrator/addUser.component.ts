import { Component } from '@angular/core';
import { PostSystemService } from '../service/postSystem.service';
import { ServerService } from '../service/server.service';
import { User } from './user';
import userCat = require('./user');

declare let swal:any;

@Component({
  selector: 'addUser',
  templateUrl: `app/administrator/addUser.component.html`
})
export class AddUserComponent {
    pack: any;
    user = new User();
    area = [];
    authCat = [];

    constructor(private postSystemService: PostSystemService,
                private serverService: ServerService){
        this.area = userCat.Area;
        this.authCat = userCat.Auth;
    }

    ngOnInit(): void{}

    addUserClick(){
      let userObject = this.user.getObject();
      console.log(userObject);
      let url = this.serverService.getUserUrl(this.user.account);
      console.log(url);
      this.postSystemService
          .postData(url, userObject)
          .subscribe(
            data => swal('Congrations', data.success, 'success'),
            error => {
              let err = error.json();
              console.log(err.error);
            }
          );
    }
}
