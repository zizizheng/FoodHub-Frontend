import { Donation } from './donation';
import { NgForm } from '@angular/forms';
import { Component, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServerService } from '../service/server.service';
import { AddTemplateComponent } from '../template/addTemplate.component';
import { DatePipe } from '@angular/common';

import itemCat = require('./donation');
declare let swal:any;

@Component({
    selector: 'addDonation',
    templateUrl: `app/donation/addDonation.component.html`,
    styleUrls: ['app/template/addTemplate.component.css']
})
export class AddDonationComponent extends AddTemplateComponent implements OnInit{
    dn_id: number;
    donor_name: string;
    dnUrl: string;
    donations = [];
    memo: string;
    pack: any;
    donate_dt;
    category = itemCat.Category;
    area = itemCat.Warehouse;

    constructor(injector: Injector,
                private serverService: ServerService,
                private ref: ChangeDetectorRef){
        super(injector);
    }

    ngOnInit(){
        this.dnUrl = this.serverService.getDonationUrl('');
        this.GetSpecificData( this.dnUrl + 'max_dnid' )
            .then((data: number) => this.dn_id = data + 1);
        this.donate_dt = new DatePipe().transform( Date.now(), 'yyyy-MM-dd' );
        this.newRow();
    }

    addDonation(){
        let comp = this;
        let url = this.dnUrl + this.dn_id;
        // console.log(this.dnUrl);
        this.donations.forEach(
            (dn: Donation) => {
                dn.donor_name = comp.donor_name;
                dn.donate_dt = comp.donate_dt;
                dn.memo = comp.memo;
                comp.Add(url, dn.getObject(), false);
                // console.log(dn.getObject());
            }
        );
    }

    cleanClick(){
        // this.item = new Donation();
    }

    // enterBarcode(e){
    //     $('#barcodeInput').removeClass('success fail');
    //     console.log(e.key);
    //     let comp = this;
    //     if(e.key == 'Enter'){
    //         let url = this.serverService.getBarcodeUrl(e.target.value);
    //         this.GetSpecificObject(url).then((res: Donation) => {
    //             this.item.item_name = res.item_name;
    //             this.item.item_unit = res.item_unit;
    //             this.item.item_unitprice = res.item_unitprice;
    //             $('#barcodeInput').addClass('success');
    //             setTimeout(function() {}, 2500);

    //         }).catch(function(e){
    //             // add warning to input
    //             console.log('oh fuck i cant find anything');
    //             $('#barcodeInput').addClass('fail');
    //         });
    //     }
    // }

    newRow(){
        this.donations[this.donations.length] = new Donation();
        this.ref.detectChanges();
        console.log(this.donations);
    }

    delRow(){
        this.donations.pop();
    }

}
