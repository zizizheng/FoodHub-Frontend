import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchReceiver',
  templateUrl: `app/receiveMember/searchReceiver.component.html`
})
export class SearchReceiverComponent implements OnInit {
    private selectedBut = false;

    ngOnInit(): void{}

    updateClick(){
        this.selectedBut = true;
    }
}
