import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
//import { OnInit } from '@angular/core';
declare let swal:any;

@Component({
	selector: 'loginPage',
	templateUrl: 'app/login.component.html',
	providers:[HttpService]
})
export class LoginComponent {
	curTime: Object;
	constructor(private router: Router, 
				private httpService: HttpService){
		
	}

	ngOnInit(){

	}

	loginClick(){
		this.router.navigate(['expiryPage']);
	}
}
