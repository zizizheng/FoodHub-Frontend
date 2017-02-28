import { Donation } from './donation';
import { Component, OnInit, Injector, Input } from '@angular/core';

@Component({
  selector: 'giveDonation',
  templateUrl: `app/donation/giveDonation.component.html`
})
export class GiveDonationComponent implements OnInit {
    @Input() exList: ;

    constructor(){

    }

    ngOnInit(): void {
    }

    delEx(index){
        this.exList.splice(index, 1);
    }
}



