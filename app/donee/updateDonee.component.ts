import { Component, OnInit, OnChanges, Input, Injector } from '@angular/core';
import { UpdateTemplateComponent } from '../template/updateTemplate.component';
import { Donee } from './donee';
import { PostSystemService } from '../service/postSystem.service';
import { ServerService } from '../service/server.service';
import itemCat = require('./donee');

@Component({
  selector: 'updateDonee',
  templateUrl: `app/donee/updateDonee.component.html`
})
export class UpdateDoneeComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;

    donee: Donee;
    category = itemCat.Category;
    postSystemService: PostSystemService;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.donee = new Donee();
    }

    ngOnInit(){
        this.donee.pushData(this.inputItem);
    }

    ngOnChanges(){
        this.donee.pushData(this.inputItem);        
    }

    sendClick(){
        let itemObject = this.donee.getObject();
        let url = this.serverService.getDoneeUrl(this.donee.donee_name);
        this.Update(url, itemObject);
    }
    
}