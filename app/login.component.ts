import { Component }  from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
//import { OnInit } from '@angular/core';
declare let swal:any;

@Component({
	selector: 'loginPage',
	templateUrl: 'app/login.component.html',
})
export class LoginComponent {
	curTime: Object;
	account: string;
	password: string;
	userName: string;
	pack: any;
	isLogin: boolean;

	constructor(private router: Router, 
				public loginService: LoginService){
		this.isLogin = false;
		this.pack = undefined;
		this.userName = undefined;
	}

	ngOnInit(){
		this.userName = this.loginService.checkLogin();
		this.isLogin = (this.userName == undefined) ? false : true;
	}

	userInput($event, inputType){
		if(inputType == 'a'){
			this.account = $event.target.value;
		}
		else {
			this.password = $event.target.value;
		}
	}

	loginClick(){
		//swal("Account : " + this.account + ", and Password : " + this.password);
		this.loginService.postData(this.account, this.password)
			.subscribe(
				data => this.pack = data,
				error => {
					let err = error.json();
					swal(err.error);
				},
				() => {
					let gotName = this.pack.name;
					this.loginService.recordLogin(gotName),
					swal( 'Login successed', 'Welcome to FoodBank, ' + gotName),
					this.router.navigate(['expiryPage'])
				}
			);
	}
}
