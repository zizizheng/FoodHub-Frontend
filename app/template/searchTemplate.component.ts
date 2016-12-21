import { ServerService } from './../service/server.service';
import { Http } from '@angular/http';
import { PostSystemService } from './../service/postSystem.service';
import { Component, OnInit, Input, Injector } from '@angular/core';

declare let swal:any;

@Component({})
export class SearchTemplateComponent {
    @Input() refreshBut = false;
    @Input() importBut = false;
    @Input() delCheck = false;
    @Input() selectedBut = false;
    @Input() selectCat = false;
    @Input() searchWord ='';
    @Input() searchKey = '';
    @Input() delArray = [];
    @Input() category = [];
    @Input() categoryKey = [];
    @Input() categorySearch = [];
    @Input() dataList = [];
    @Input() primaryKey = '';
    @Input() parentUrl = '';
    @Input() protected postSystemService: PostSystemService;

    constructor(injector: Injector){
        this.postSystemService = injector.get(PostSystemService);
    }
    
    @Input()
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
                    this.putIntoChecklist(primaryKey);
                    // console.log(this.dataList);
                }
            );
    }

    @Input()
    Search(url, urlParam){
        this.postSystemService
            .getData(url, urlParam)
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
                    // console.log(this.dataList);
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
                this.deleteObject();
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

    deleteObject(){
        for( let ob of this.delArray ){
            if( ob.checked ){
                this.postSystemService
                    .deleteData(ob.url)
                    .subscribe( 
                        data => swal('Delete', data.success ,'success'),
                        error => {
                            let err = error.json();
                            swal(err.error);
                        },
                        () => {
                            // refresh form
                            this.dataList = [];
                        }
                    );
            }
        }
    }

    getType = function(ele){
        return Object.prototype.toString.call(ele);
    }
}
