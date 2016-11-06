import { Component } from '@angular/core';

@Component({
  selector: 'searchItem',
  templateUrl: `app/donateItem/searchitem.component.html`
})
export class SearchItemComponent {
    private refreshBut = false;
    private importBut = false;

    refreshClick(){
        this.cleanPage();
        this.refreshBut = true;
    }

    importClick(){
        this.cleanPage();
        this.importBut = true;
    }

    cleanPage(){
        this.refreshBut = false;
        this.importBut = false;
    }
}
