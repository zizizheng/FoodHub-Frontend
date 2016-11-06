import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchDonater',
  templateUrl: `app/donateMember/searchDonater.component.html`
})
export class SearchDonaterComponent implements OnInit {
    private selectedBut = false;

    ngOnInit(): void{}

    refreshClick(){
        this.selectedBut = true;
    }
}
