import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donor',
  templateUrl: `app/donor/donor.component.html`
})
export class DonorComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
