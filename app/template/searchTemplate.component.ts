import { ServerService } from './../service/server.service';
import { Http } from '@angular/http';
import { PostSystemService } from './../service/postSystem.service';
import { Component, OnInit, Input, Injector } from '@angular/core';

declare let swal:any;

@Component({})
export class SearchTemplateComponent {
    updateBut = false;
    importBut = false;
    delCheck = false;
    selectedBut = false;
    selectCat = false;
    searchWord ='';
    searchKey = '';
    delArray = [];
    category = [];
    categoryKey = [];
    categorySearch = [];
    dataList = [];
    primaryKey = '';
    parentUrl = '';
    listUrl = '';
    selectedItem;
    protected postSystemService: PostSystemService;

    constructor(injector: Injector){
        this.postSystemService = injector.get(PostSystemService);
    }
    
    GetList(listUrl, primaryKey){
        this.postSystemService
            .getDataList(listUrl)
            .subscribe(
                data => {
                    if (this.getType(data) === this.getType([])) this.dataList = data; 
                    else this.dataList.push(data)
                },
                error => {
                    let err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    this.dealId();                    
                    this.putIntoChecklist(primaryKey);
                    // console.log(this.dataList);
                }
            );
    }

    Search(url, urlParam){
        this.postSystemService
            .getData(url, urlParam)
            .subscribe(
                data => {
                    if (this.getType(data) === this.getType([]))this.dataList = data; 
                    else this.dataList.push(data)
                },
                error => {
                    let err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    // console.log(this.dataList);
                    this.dealId();
                    this.putIntoChecklist(this.primaryKey);
                }
            );

    }

    Delete(){
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
                for( let ob of this.delArray ){
                    if( ob.checked ){
                        this.deleteObject(ob.url);
                    }
                }
            });
        }
        else {
            swal("請勾選欲刪除的項目" ,"不然要刪空氣喔", "question");
        }
        
    }

    putIntoChecklist(primaryKey){
        // clean array
        this.delArray = [];
        
        for(let item of this.dataList){
            this.delArray.push({
                primaryKey: item[this.primaryKey],
                checked: false,
                url: this.parentUrl + item[this.primaryKey]
            });
        }
        console.log(this.delArray);
    }

    deleteObject(ob){
        this.postSystemService
            .deleteData(ob)
            .subscribe( 
                data => swal('Delete', data.success ,'success'),
                error => {
                    let err = error.json();
                    swal(err.error);
                },
                () => {
                    // refresh form
                    this.GetList(this.parentUrl + 'list', this.primaryKey);
                }
        );
        
    }

    dealId(){
        if (this.getType(this.dataList) === this.getType([])){
            for (let item of this.dataList){
                if(item._id != undefined)
                    item._id = item._id.slice(-8);
            }
        }
        
    }

    getType = function(ele){
        return Object.prototype.toString.call(ele);
    }
}
