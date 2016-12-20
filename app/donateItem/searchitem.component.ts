import { Component, enableProdMode, ModuleWithProviders, Injector } from '@angular/core';
import { DonateItem } from './donateItem';
import { ServerService } from './../service/server.service';
import itemCat = require('./donateItem');
import { SearchTemplateComponent } from '../template/searchTemplate.component';

declare let swal:any;

@Component({
  selector: 'searchItem',
  templateUrl: `app/donateItem/searchItem.component.html`,
})
export class SearchItemComponent extends SearchTemplateComponent{

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.category = itemCat.Category;
        this.categoryKey = itemCat.CategoryKey;
        this.dataList = new Array<DonateItem>();
        this.primaryKey = '_id';
        this.parentUrl = this.serverService.getDonationUrl('');
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
        this.dataList = [];
        let keyIndex = this.category.indexOf(this.searchKey); 
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt' 
                        ? Date.parse(this.searchWord).toString() : this.searchWord;
        let url = this.serverService.getDonationUrl(this.searchWord);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
        this.dealDate();
    }
    
    // process date for specific number
    dealDate(){
        let splitArray = [];
        for(let i = 0; i < this.dataList.length; i++){
            this.dataList[i]._id = this.dataList[i]._id.slice(-8);
        }
    }

    checkChange(item, checked){
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
    }

    deleteClick(){
        this.Delete();
    }
}
