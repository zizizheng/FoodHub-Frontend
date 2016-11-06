import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-footer',
  templateUrl: `app/footer.component.html`
})
export class MyFooterComponent {

    constructor(private router: Router){
    }
}
