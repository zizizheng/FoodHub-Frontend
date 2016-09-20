import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchMember',
  templateUrl: `app/donateMember/searchmember.component.html`
})
export class SearchMemberComponent implements OnInit {
    private selectedBut = false;

    ngOnInit(): void{}

    refreshClick(){
        this.selectedBut = true;
    }
}
