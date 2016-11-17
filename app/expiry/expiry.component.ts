import { Component } from '@angular/core';
import { Expiry } from './expiry';

@Component({
  selector: 'expiry',
  templateUrl: `app/expiry/expiry.component.html`
})
export class ExpiryComponent {
    expiries = [
        {id: 1, date: '2016/02/28', name:'泡麵', quantity: 5},
        {id: 2, date: '2016/02/10', name:'蘋果', quantity: 3}
    ]
}
