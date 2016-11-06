import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'receiveMember',
  templateUrl: `app/receiveMember/receivemember.component.html`
})
export class ReceiveMemberComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
