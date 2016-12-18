import { ServerService } from './../service/server.service';
import { Component } from '@angular/core';
import { Donee } from './donee';
import { PostSystemService } from '../service/postSystem.service';

import doneeCat = require('./donee');
declare let swal:any;

@Component({
  selector: 'searchReceiver',
  templateUrl: `app/receiveMember/searchReceiver.component.html`
})
export class SearchReceiverComponent {
    private refreshBut = false;
    private importBut = false;
    private delCheck = false;
    private selectedBut = false;
    private selectCat = false;
    private searchWord ='';
    private searchKey = '';
    private delArray = [];
    private category = [];
    private categorySearch = [];
    private categoryKey = [];
    private doneeList: Donee[];

    constructor(private serverService: ServerService,
                private postSystemService: PostSystemService){
        this.category = doneeCat.Category;
        this.categorySearch = doneeCat.CategorySearch;
        this.categoryKey = doneeCat.CategoryKey;
        this.doneeList = new Array<Donee>();
    }

    searchClick(){
        this.doneeList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey); 
        let url = this.serverService.getDoneeUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(
                data => this.doneeList.push(data),
                error => {
                    let err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    this.putIntoChecklist();
                    console.log(this.doneeList);
                }
            );
    }

    putIntoChecklist(){
        // clean array
        this.delArray = [];

        for(let i = 0; i < this.doneeList.length; i++){
            this.delArray.push({
                donee_name: this.doneeList[i].donee_name,
                checked: false
            });
        }
        // console.log(this.delArray);
    }

    checkChange(item, checked){
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => object.donee_name == item.donee_name)[0].checked = checked;
    }

    deleteClick(){
        this.delCheck = false;
        for(let ob of this.delArray){
            if(ob.checked == true){
                this.delCheck = true;
                break;
            }
        }   
        //let that = this;
        if (this.delCheck){
            swal({
                title: "確認刪除?",
                text: "被刪除的紀錄將不能復原",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "是的，確定刪除",
                cancelButtonText: "取消"
            }).then(() => {
                this.deleteDonee();
            });
        }
        else {
            swal("請勾選欲刪除的項目" ,"不然要刪空氣喔", "question");
        }
            
    }

    deleteDonee(){
        for( let ob of this.delArray ){
            if( ob.checked ){
                this.postSystemService
                    .deleteData(this.serverService.getDoneeUrl(ob.donee_name))
                    .subscribe( 
                        data => swal('Delete', data.success ,'success'),
                        error => {
                            let err = error.json();
                            swal(err.error);
                        },
                        () => {
                            // refresh form
                            this.doneeList = [];
                        }
                    );
            }
        }
    }

    searchChange(value){
        this.selectCat = (value === '單位分類') ? true : false;
    }
}
