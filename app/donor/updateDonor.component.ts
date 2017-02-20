import { UpdateTemplateComponent } from './../template/updateTemplate.component';
import { Component, OnInit, Injector, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../service/server.service';
import { Donor } from './donor';
import itemCat = require('./donor');


@Component({
  selector: 'updateDonor',
  templateUrl: `app/donor/updateDonor.component.html`
})
export class UpdateDonorComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    isGroup = false;
    donor: Donor;
    category = itemCat.Category;
    area = itemCat.Area;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.donor = new Donor();
    }

    ngOnInit(){
        this.donor.pushData(this.inputItem);
    }

    ngOnChanges(){
        this.donor.pushData(this.inputItem);        
    }

    sendClick(){
        let itemObject = this.donor.getObject();
        let url = this.serverService.getDonorUrl(this.donor.donor_name);
        this.Update(url, itemObject).then(
            (data) => {
                if(data) this.updated.emit(true);
            }
        );
    }

    clearClick(){
        this.updated.emit(false);
    }

    catChange(value){
        //alert(value);
        this.isGroup = (value === "團體") ? true : false;
    }
}
