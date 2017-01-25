import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostSystemService {
    private pack;
    constructor( private http: Http ){
    }

    getDataList(url){
        return this.http.get(url)
                        .map(response => response.json());
    }

    getData(url, key){
        let params = new URLSearchParams();
        params.set('searchKey', key);
        console.log(url);

        return this.http.get(url, { search: params })
                        .map(response => response.json());
    }

    getSpecificData(url){
        return this.http.get(url)
                        .map(response => response.json());
    }

    postData(url, object){
        // TODO : move subscribe to corresponding component
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let params = JSON.stringify(object);
        console.log(params);

        return this.http.post(url, params, options)
                .map(response => response.json());
                
    }

    deleteData(url){
        console.log(url);
        return this.http.delete(url)
                .map(response => response.json());
    }
}