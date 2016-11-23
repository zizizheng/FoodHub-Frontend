import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Time } from './time';
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
		this.httpService.getData()
			.subscribe(
				data => this.curTime = data,
				error => alert(error),
				() => alert(this.curTime.milliseconds_since_epoch)
			);

	}

	loginClick(){
		this.router.navigate(['expiryPage']);
	}
}
