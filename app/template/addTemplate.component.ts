import { PostSystemService } from './../service/postSystem.service';
import { Component, Injector, Input } from '@angular/core';

declare let swal:any;

@Component({})
export class AddTemplateComponent {
    @Input() protected postSystemService: PostSystemService;

    constructor(injector: Injector){
        this.postSystemService = injector.get(PostSystemService);
    }

    Add(url, urlParam){
        this.postSystemService.postData(url, urlParam).subscribe(
            data => swal('Congrations', data.success, 'success'),
            error => {
                let err = error.json();
                console.log(err.error);
            }
        );
    }
}
