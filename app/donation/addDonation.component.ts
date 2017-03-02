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
    barcodeLength: number;
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
        this.barcodeLength = 5;
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

    keyBarcode(e, barcode, item){
        if(e.keyCode !== 8)
            if(barcode !== undefined && barcode.length > this.barcodeLength)
                this.fillByBarcode(barcode, item);
    }

    fillByBarcode(barcode, item){
        // $('#barcodeInput').removeClass('success fail');
        let comp = this;
        let url = this.serverService.getBarcodeUrl(barcode);
        this.GetSpecificData(url).then((res: Donation) => {
            item.item_name = res.item_name;
            item.item_unit = res.item_unit;
            item.item_unitprice = res.item_unitprice;
            setTimeout(function() {}, 2500);

        }).catch(function(e){
            // add warning to input
            console.log('oh fuck i cant find anything');
            // $('#barcodeInput').addClass('fail');
        });
    }

    newRow(){
        this.donations[this.donations.length] = new Donation();
        this.ref.detectChanges();
        console.log(this.donations);
    }

    delRow(){
        this.donations.pop();
    }

}
