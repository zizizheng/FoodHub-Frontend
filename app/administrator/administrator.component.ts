import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: `app/administrator/administrator.component.html`
})
export class AdministratorComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
