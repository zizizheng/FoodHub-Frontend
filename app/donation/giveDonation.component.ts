import { Donation } from './donation';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'giveDonation',
  templateUrl: `app/donation/giveDonation.component.html`
})
export class GiveDonationComponent implements OnInit {
    dnList: Array<Donation>;

    constructor(){
        this.dnList = new Array<Donation>();
    }

    ngOnInit(): void {
    }

    GetList(listUrl, primaryKey){
    }
}
