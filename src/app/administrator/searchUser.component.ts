import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchUser',
  templateUrl: `app/administrator/searchUser.component.html`
})
export class SearchUserComponent implements OnInit {
    private selectedBut = false;

    ngOnInit(): void{}

    editClick(){
        this.selectedBut = true;
    }
}
