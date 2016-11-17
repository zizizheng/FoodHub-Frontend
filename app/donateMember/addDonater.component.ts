import { Component, OnInit } from '@angular/core';

declare let swal:any;

@Component({
  selector: 'addDonater',
  templateUrl: `app/donateMember/addDonater.component.html`
})
export class AddDonaterComponent implements OnInit {
    isGroup = false;

    ngOnInit(): void{}

    catChange(value){
        //swal("Here execute the change" + value);
        this.isGroup = (value === "cat-group") ? true : false;
    }
}
