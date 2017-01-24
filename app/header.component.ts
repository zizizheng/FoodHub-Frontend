import { Headers } from '@angular/http';
import { LoginService } from './service/login.service';
import { Component, Input, HostListener } from '@angular/core';
// import $ = require('jquery');

@Component({
	selector: 'my-header',
	templateUrl: 'app/header.component.html',
	styleUrls: ['app/header.component.css'],
	host: {
        '(window:scroll)': 'updateHeader()'
    }
})
export class HeaderComponent {
	userName: string;
	isScrolled = false;
	recPos: number = 0;
	lastPos: number = 0;
	prePos: number = 0;
	Disappear = 200;
	collapse: boolean;

	constructor(public loginService: LoginService){
		loginService.nameChange$.subscribe(name => this.userName = name);
		this.userName = '使用者';
	}

	

    updateHeader() {
		// $(window).scroll(function() {
		// 	let lastScrollTop = 0;		
		// 	let st = $(this).scrollTop();
		// 	if (st < lastScrollTop){
		// 		$('#Header ').fadeIn();
		// 	} 
		// 	else {
		// 		$('#Header').fadeOut();
		// 	}
		// 	lastScrollTop = st;
  		// })
		// if(window.pageYOffset - this.prePos < 0){
		// 	this.isScrolled = false;
		// }
		// else {
		// 	this.recPos += window.pageYOffset - this.prePos;

		// 	if (this.recPos > this.Disappear){
		// 		this.isScrolled = true;
		// 		this.lastPos = window.pageYOffset;
		// 	}
		// }
		// this.prePos = window.pageYOffset;
    }

}
