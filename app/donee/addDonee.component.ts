import { AddTemplateComponent } from './../template/addTemplate.component';
import { Donee } from './donee';
import { Component, Injector } from '@angular/core';
import { ServerService } from '../service/server.service';
import doneeCat = require('./donee');

@Component({
    selector: 'addDonee',
    templateUrl: `app/donee/addDonee.component.html`
})
export class AddDoneeComponent extends AddTemplateComponent {
    pack: any;
    donee = new Donee();
    category = [];

    constructor(injector: Injector,
                private serverService: ServerService){
          super(injector);
          this.category = doneeCat.Category;
    }

    addDoneeClick(){
      let doneeObject = this.donee.getObject();
      let url = this.serverService.getDoneeUrl(this.donee.donee_name);
      this.Add(url, doneeObject);
    }

    cleanClick(){
        this.donee = new Donee();
    }
}
