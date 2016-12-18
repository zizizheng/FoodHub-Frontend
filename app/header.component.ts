import { LoginService } from './service/login.service';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/header.component.html',
})
export class HeaderComponent {
	userName: string;

	constructor(public loginService: LoginService){
		loginService.nameChange$.subscribe(name => this.userName = name);
		this.userName = '使用者';
	}
}
