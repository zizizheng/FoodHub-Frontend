import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Injector } from '@angular/core';
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
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();


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
        console.log(this.inputItem);
        console.log(this.donee);
    }

    sendClick(){
        let itemObject = this.donee.getObject();
        let url = this.serverService.getDoneeUrl(this.donee.donee_name);
        this.Update(url, itemObject).then(
            (data) => {
                if(data) this.updated.emit();
            }
        );
    }
    
    clearClick(){
        this.updated.emit(false);
    }
}