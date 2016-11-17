import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'updateDonater',
  templateUrl: `app/donateMember/updateDonater.component.html`
})
export class UpdateDonaterComponent implements OnInit {
    isGroup = false;

    ngOnInit(): void{}

    catChange(value){
        //alert(value);
        this.isGroup = (value === "cat-group") ? true : false;
    }
}
