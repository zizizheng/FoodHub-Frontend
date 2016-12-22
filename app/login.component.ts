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
	account: string = '';
	password: string = '';
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

	loginClick(){
		//swal("Account : " + this.account + ", and Password : " + this.password);
		if( this.account == '' || this.password == '') 
			swal('請輸入帳號密碼', '忘記帳密了嗎? 這功能也還沒實作QQ', 'warning');
		else {
			this.loginService.postData(this.account, this.password)
				.subscribe(
					data => this.pack = data,
					error => {
						let err = error.json();
						swal('Error', err.error);
					},
					() => {
						this.loginService.recordLogin(this.account),
						swal( 'Login Successed', 'Welcome to FoodBank, ' + this.account),
						this.router.navigate(['expiryPage'])
					}
				);

		} 
	}
}
