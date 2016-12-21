import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donation',
  templateUrl: `app/donation/donation.component.html`
})
export class DonationComponent implements OnInit {
    private selectedBut = "search";

    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
        //alert(this.selectedBut);
    }

}
