import { PostSystemService } from './../service/postSystem.service';
import { Donee } from './donee';
import { Component } from '@angular/core';
import { ServerService } from '../service/server.service';

declare let swal:any;

@Component({
    selector: 'addReceiver',
    templateUrl: `app/receiveMember/addReceiver.component.html`
})
export class AddReceiverComponent {
    pack: any;
    donee = new Donee();
    
    constructor(private postSystemService: PostSystemService,
                private serverService: ServerService){
      
    }

    ngOnInit(): void{}

    addDoneeClick(){
      let doneeObject = this.donee.getObject();
      console.log(doneeObject);
      let url = this.serverService.getDoneeUrl(this.donee.donee_name);
      console.log(url);
      this.postSystemService
          .postData(url, doneeObject)
          .subscribe(
            data => swal('Congrations', data.success, 'success'),
            error => {
              let err = error.json();
              console.log(err.error);
            }
          );
    }
}
