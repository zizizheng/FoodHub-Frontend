// TODO : 新增後的跳窗

import { PostSystemService } from './../service/postSystem.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DonateItem } from './donateItem';
import { ServerService } from '../service/server.service';

import itemCat = require('./donateItem');
declare let swal:any;

@Component({
    selector: 'addItem',
    templateUrl: `app/donateItem/addItem.component.html`,
})
export class AddItemComponent implements OnInit {
    pack: any;
    item = new DonateItem();
    category = [ '','營養品','沖泡品','主食類','罐頭','生活用品','零食','調味品','飲料','生鮮食品','其他'];
    area = itemCat.Warehouse;
    constructor(private postSystemService: PostSystemService,
                private serverService: ServerService){
      
    }

    ngOnInit(): void{}

    addItemClick(){
      let itemObject = this.item.getObject();
      let url = this.serverService.getDonationUrl(this.item._id);
      this.postSystemService
          .postData(url, itemObject)
          .subscribe(
            data => swal('Congrations', data.success, 'success'),
            error => {
              let err = error.json();
              console.log(err.error);
            }
          );
    }

    // addItemClick(){
    //   this.danateItemService.postData()
    //       .subscribe(data => this.pack = data,
    // 			error => {
    // 				let err = error.json();
    // 				swal(err.error);
    // 			},
    // 			() => {
    // 				swal( 'Yalo' )
    // 			}
    // 		);
    // }
}
