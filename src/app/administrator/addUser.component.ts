import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addUser',
  templateUrl: `app/administrator/addUser.component.html`
})
export class AddUserComponent implements OnInit {
    private selectedBut = false;

    ngOnInit(): void{}

    updateClick(){
        this.selectedBut = true;
    }
}
