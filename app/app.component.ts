import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-header></my-header>
  <router-outlet></router-outlet>
  <my-footer></my-footer>
  `
})
export class AppComponent {

}
