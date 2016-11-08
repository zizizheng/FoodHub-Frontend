import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donateMember',
  templateUrl: `app/donateMember/donateMember.component.html`
})
export class DonateMemberComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
