import { PostSystemService } from './../service/postSystem.service';
import { Component, Injector, Input } from '@angular/core';

declare let swal:any;

@Component({})
export class AddTemplateComponent {
    @Input() protected postSystemService: PostSystemService;

    constructor(injector: Injector){
        this.postSystemService = injector.get(PostSystemService);
    }

    Add(url, urlParam, showMsg = true){
        this.postSystemService.postData(url, urlParam).subscribe(
            data => {
                swal('Congrations', data.success, 'success')
            },
            error => {
                let err = error.json();
                swal('Oops!', err.error, 'warning');
            }
        );
    }

    GetSpecificData(url){
        let that = this;
        return new Promise(function(resolve, reject){
            that.postSystemService.getSpecificData(url).subscribe(
                data => resolve(data),
                error => reject(error),
            );
        });
    }
        
}
