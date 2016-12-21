import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'updateDonor',
  templateUrl: `app/donor/updateDonor.component.html`
})
export class UpdateDonorComponent implements OnInit {
    isGroup = false;

    ngOnInit(): void{}

    catChange(value){
        //alert(value);
        this.isGroup = (value === "cat-group") ? true : false;
    }
}
