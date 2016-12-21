import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donee',
  templateUrl: `app/donee/donee.component.html`
})
export class DoneeComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
