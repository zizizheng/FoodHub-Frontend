import { Component, OnInit } from '@angular/core';
import { Donor } from './donor';
import { ServerService } from '../service/server.service';
import { PostSystemService } from '../service/postSystem.service';

import donorCat = require('./donor');
declare let swal:any;

@Component({
  selector: 'addDonater',
  templateUrl: `app/donateMember/addDonater.component.html`
})
export class AddDonaterComponent {
    pack: any;
    isGroup = false;
    donor = new Donor();
    category = [];
    area = [];

    constructor(private postSystemService: PostSystemService,
                private serverService: ServerService){
        this.category = donorCat.Category;
        this.area = donorCat.Area;
    }

    addDonorClick(){
      let donorObject = this.donor.getObject();
      console.log(donorObject);
      let url = this.serverService.getDonorUrl(this.donor.donor_name);
      console.log(url);
      this.postSystemService
          .postData(url, donorObject)
          .subscribe(
            data => swal('Congrations', data.success, 'success'),
            error => {
              let err = error.json();
              console.log(err.error);
            }
          );
          this.donor = new Donor();
    }

    catChange(value){
        console.log(value);
        this.isGroup = ( value === '團體' ) ? true : false; 
    }
}
