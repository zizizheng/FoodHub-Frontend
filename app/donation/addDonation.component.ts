import { Donation } from './donation';
import { NgForm } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { ServerService } from '../service/server.service';
import { AddTemplateComponent } from '../template/addTemplate.component';

import itemCat = require('./donation');
declare let swal:any;

@Component({
    selector: 'addDonation',
    templateUrl: `app/donation/addDonation.component.html`,
})
export class AddDonationComponent extends AddTemplateComponent{
    pack: any;
    item = new Donation();
    category = itemCat.Category;
    area = itemCat.Warehouse;

    constructor(injector: Injector,
                private serverService: ServerService){
      super(injector);
    }

    addItemClick(){
      let itemObject = this.item.getObject();
      let url = this.serverService.getDonationUrl(this.item._id);
      this.Add(url, itemObject);
    }

}
