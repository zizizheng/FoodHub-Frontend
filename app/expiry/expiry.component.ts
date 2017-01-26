import { DatePipe } from '@angular/common';
import { PostSystemService } from './../service/postSystem.service';
import { ServerService } from './../service/server.service';
import { Component, OnInit } from '@angular/core';
import { Expiry } from './expiry';

declare let swal:any;

@Component({
  selector: 'expiry',
  templateUrl: `app/expiry/expiry.component.html`
})
export class ExpiryComponent implements OnInit{
    expiries = [];
    title = '三周內到期貨品';

    constructor(private serverService: ServerService,
                private postSystemService: PostSystemService){

    }

    ngOnInit(){
        this.getList(21);
    }

    getList(days){
        let url = this.serverService.getExpiryUrl(days);
        this.postSystemService.getDataList(url)
            .subscribe(
                data => {
                    this.expiries = data;
                    if(days % 7 == 0) this.title = days / 7 + '周內到期貨品';
                    else this.title = days + '天內到期貨品';
                },
                error => {
                    swal('Do not find expiries');
                    this.expiries = [];
                },
                ()=> this.dealIdAndDate()
            );
    }

    dealIdAndDate(){
        let pipe = new DatePipe();
        for(let item of this.expiries){
            if(item.item_id != undefined)
                item.item_id = item.item_id.slice(-8);
            if(item.expire_dt != undefined)
                item.expire_dt = pipe.transform(item.expire_dt, 'yyyy/MM/dd');
        }
        console.log(this.expiries);
    }

    iconHover(value){
        if(value) $('#iExpiry').addClass('flash');
        else $('#iExpiry').removeClass('flash');
    }

    iconClick(){
        let comp = this;
        swal({
            title: '輸入距離今日之過期天數',
            input: 'text',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
        }).then(function(value){
            value = parseInt(value);
            console.log(value);

            if(!isNaN(value)){
                if(value < 1 || value > 30) swal('範圍為 1 ~ 30', '', 'warning');
                else comp.getList(value);
            }
            else swal('請輸入數字', '', 'warning');
        });
        
    }


}
