import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    serverUrl: string;
    loginName: string;
    constructor(private http: Http){
        this.serverUrl = 'http://localhost:8080/user/login/';
        this.loginName = undefined; 
    }

    recordLogin(name){
        this.loginName = name;
        console.log('Here is service, login name is : ' + this.loginName);
        this.checkLogin();
    }

    checkLogin(){
        console.log('Here is service, return name ' + this.loginName);
        return this.loginName;
    }

    getData(name){
        //console.log('login name = ' + name);
        //console.log(this.serverUrl + name);
        return this.http.get(this.serverUrl + name)
                .map(response => response.json());
    }

    postData(name, password){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let params = { "password": password };
        //console.log('login name = ' + name);
        //console.log(this.serverUrl + name);
        return this.http.post(this.serverUrl + name, JSON.stringify(params), options)
                .map(response => response.json());
    }
}