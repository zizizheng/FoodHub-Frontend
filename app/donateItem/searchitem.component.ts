import { HTTP_PROVIDERS } from '@angular/http';
import { Component, enableProdMode, ModuleWithProviders } from '@angular/core';
import { DonateItem } from './donateItem';
import { PostSystemService } from '../service/postSystem.service';
import { ServerService } from './../service/server.service';
//global constants
import itemCat = require('./donateItem');

declare let swal:any;

@Component({
  selector: 'searchItem',
  templateUrl: `app/donateItem/searchItem.component.html`,
})
export class SearchItemComponent {
    private refreshBut = false;
    private importBut = false;
    private searchWord ='';
    private searchKey = '';
    private itemList: DonateItem[];
    private category = [];
    private categoryKey = [];
    private delArray = [];
    private delCheck = false;

    constructor(private postSystemService: PostSystemService, 
                private serverService: ServerService){
        this.category = itemCat.Category;
        this.categoryKey = itemCat.CategoryKey;
    }

    refreshClick(){
        this.cleanPage();
        this.refreshBut = true;
        //alert(test);
    }

    importClick(){
        this.cleanPage();
        this.importBut = true;
    }

    cleanPage(){
        this.refreshBut = false;
        this.importBut = false;
    }

    // TODO : check search key
    searchClick(){
        let keyIndex = this.category.indexOf(this.searchKey); 
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt' 
                        ? Date.parse(this.searchWord).toString() : this.searchWord;
        let url = this.serverService.getDonationUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(
                data => this.itemList = data,
                error => {
                    let err = error.json();
                    swal(err.error);
                },
                () => {
                    console.log(this.itemList);
                    this.dealDate();
                    this.putIntoChecklist();
                }
            );
    }
    
    // process date for specific number
    dealDate(){
        let splitArray = [];
        for(let i = 0; i < this.itemList.length; i++){
            this.itemList[i]._id = this.itemList[i]._id.slice(-8);
        }
    }

    putIntoChecklist(){
        // clean array
        this.delArray = [];

        for(let i = 0; i < this.itemList.length; i++){
            this.delArray.push({
                id: this.itemList[i]._id,
                checked: false
            });
        }
        // console.log(this.delArray);
    }

    checkChange(item, checked){
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => object.id == item._id)[0].checked = checked;
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
                cancelButtonText: "取消",
                closeOnConfirm: false
            },  () => {
                this.deleteItem();
            });
            
        }
        else {
            swal("請勾選欲刪除的項目");
        }
            
    }

    deleteItem(){
        for( let ob of this.delArray ){
            if( ob.checked ){
                this.postSystemService
                    .deleteData(this.serverService.getDonationUrl(ob.id))
                    .subscribe( 
                        data => swal('Delete', data.success ,'success'),
                        error => {
                            let err = error.json();
                            swal(err.error);
                        },
                        () => {
                            // refresh form
                            this.searchClick();
                        }
                    );
            }
        }
    }
}
