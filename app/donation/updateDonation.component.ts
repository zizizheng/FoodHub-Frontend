import { PostSystemService } from './../service/postSystem.service';
import { Component, Injector, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Donation } from './donation';
import { DatePipe } from '@angular/common';
import { UpdateTemplateComponent } from '../template/updateTemplate.component';
import { ServerService } from '../service/server.service';

import itemCat = require('./donation');

@Component({
  selector: 'updateDonation',
  templateUrl: `app/donation/updateDonation.component.html`
})
export class UpdateDonationComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    item: Donation;
    category = itemCat.Category;
    area = itemCat.Warehouse;
    postSystemService: PostSystemService;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.item = new Donation();
    }

    ngOnInit(){
        this.item.pushData(this.inputItem);
    }

    ngOnChanges(){
        this.item.pushData(this.inputItem);        
    }

    sendClick(){
        let itemObject = this.item.getObject();
        let url = this.serverService.getDonationUrl(this.item._id);
        this.Update(url, itemObject).then(
            (data) => {
                // edit and update, emit true
                if(data) this.updated.emit(true);
            }
        );
    }

    clearClick(){
        // cancel update, emit false
        this.updated.emit(false);
    }
    
}
