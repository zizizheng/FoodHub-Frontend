import { Component, enableProdMode, ModuleWithProviders, Injector } from '@angular/core';
import { ServerService } from './../service/server.service';
import itemCat = require('./donation');
import { SearchTemplateComponent } from '../template/searchTemplate.component';
import { Donation } from './donation';

declare let swal:any;

@Component({
  selector: 'searchDonation',
  templateUrl: `app/donation/searchDonation.component.html`,
})
export class SearchDonationComponent extends SearchTemplateComponent{

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.category = itemCat.Category;
        this.categorySearch = itemCat.CategorySearch;
        this.categoryKey = itemCat.CategoryKey;
        this.dataList = new Array<Donation>();
        this.primaryKey = '_id';
        this.parentUrl = this.serverService.getDonationUrl('');
    }

    ngOnInit(){
        let url = this.serverService.getDonationUrl('list');
        this.GetList(url, this.primaryKey);      
    }

    updateClick(item){
        this.cleanPage();
        this.selectedItem = item;
        this.updateBut = true;
    }

    importClick(){
        this.cleanPage();
        this.importBut = true;
    }

    cleanPage(){
        this.updateBut = false;
        this.importBut = false;
    }

    // TODO : check search key
    searchClick(){
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey); 
        this.searchWord = this.categoryKey[keyIndex] == 'expire_dt' 
                        ? Date.parse(this.searchWord).toString() : this.searchWord;
        let url = this.serverService.getDonationUrl(this.searchWord);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    }

    checkChange(item, checked){
        console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => 
                    object.primaryKey == item[this.primaryKey])[0].checked = checked;
        console.log(this.delArray);
    }

    deleteClick(){
        this.Delete();
    }

    searchChange(value){
        if ( value === '品項類別' || value === '倉庫地區'){
            this.category = (value === '品項類別') ? itemCat.Category : itemCat.Warehouse;
            this.selectCat = true;
            this.searchWord = '';
        }
        else this.selectCat = false;
    }
}
