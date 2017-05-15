import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-footer',
  templateUrl: `app/component/footer.component.html`
})
export class MyFooterComponent {

    constructor(private router: Router){
    }
}
