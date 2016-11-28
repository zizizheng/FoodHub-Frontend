import { Component } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/header.component.html',
})
export class HeaderComponent {
	userName: string;

	constructor(){
		this.userName = '使用者';
	}

	setUserName(name){
		this.userName = name;
		console.log(this.userName);
	}
}
