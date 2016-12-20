import { Injectable } from '@angular/core';

@Injectable()
export class ServerService{
    private serverUrl;

    constructor(){
        this.serverUrl = 'http://localhost:8080/';
    }

    // TODO : design different function for different call

    getDonationUrl(value){
        return this.serverUrl + 'donation/' + value;
    }

    getDoneeUrl(value){
        return this.serverUrl + 'donee/' + value;
    }

    getDonorUrl(value){
        return this.serverUrl + 'donor/' + value;
    }

    getUserUrl(value){
        return this.serverUrl + 'user/' + value;
    }
}