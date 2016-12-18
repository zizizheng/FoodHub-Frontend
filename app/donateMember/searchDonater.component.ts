import { PostSystemService } from '../service/postSystem.service';
import { ServerService } from '../service/server.service';
import { Component } from '@angular/core';
import { Donor, Area } from './donor';

import donorCat = require('./donor');
declare let swal:any;

@Component({
  selector: 'searchDonater',
  templateUrl: `app/donateMember/searchDonater.component.html`
})
export class SearchDonaterComponent {
    private refreshBut = false;
    private importBut = false;
    private delCheck = false;
    private selectedBut = false;
    private selectCat = false;
    private searchWord ='';
    private searchKey = '';
    private delArray = [];
    private area = [];
    private category = [];
    private categorySearch = [];
    private categoryKey = [];
    private donorList: Donor[];

    constructor(private serverService: ServerService,
                private postSystemService: PostSystemService){
        this.area = donorCat.Area;
        this.category = donorCat.Category;
        this.categorySearch = donorCat.CategorySearch;
        this.categoryKey = donorCat.CategoryKey;
        this.donorList = new Array<Donor>();
    }
    searchClick(){
        this.donorList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey); 
        let url = this.serverService.getDonorUrl(this.searchWord);
        this.postSystemService
            .getData(url, this.categoryKey[keyIndex])
            .subscribe(
                data => this.donorList.push(data),
                error => {
                    let err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    this.putIntoChecklist();
                    // console.log(this.donorList);
                }
            );
    }

    putIntoChecklist(){
        // clean array
        this.delArray = [];

        for(let i = 0; i < this.donorList.length; i++){
            this.delArray.push({
                donor_name: this.donorList[i].donor_name,
                checked: false
            });
        }
        // console.log(this.delArray);
    }

    checkChange(item, checked){
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.donor_name == item.donor_name));
        this.delArray.filter(object => object.donor_name == item.donor_name)[0].checked = checked;
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
                this.deleteDonor();
            });
        }
        else {
            swal("請勾選欲刪除的項目" ,"不然要刪空氣喔", "question");
        }
            
    }

    deleteDonor(){
        for( let ob of this.delArray ){
            if( ob.checked ){
                this.postSystemService
                    .deleteData(this.serverService.getDonorUrl(ob.donor_name))
                    .subscribe( 
                        data => swal('Delete', data.success ,'success'),
                        error => {
                            let err = error.json();
                            swal(err.error);
                        },
                        () => {
                            // refresh form
                            this.donorList = [];
                        }
                    );
            }
        }
    }

    searchChange(value){
        this.selectCat = (value === '分類') ? true : false;
    }
}
