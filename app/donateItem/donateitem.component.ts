import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donateItem',
  templateUrl: `app/donateItem/donateItem.component.html`
})
export class DonateItemComponent implements OnInit {
    private selectedBut = "search";

    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
        //alert(this.selectedBut);
    }

}
