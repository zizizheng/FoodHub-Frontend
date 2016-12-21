import { ServerService } from './../service/server.service';
import { Component, OnInit, Injector } from '@angular/core';
import { User } from './user';
import userCat = require('./user');
import { SearchTemplateComponent } from '../template/searchTemplate.component';

@Component({
  selector: 'searchUser',
  templateUrl: `app/administrator/searchUser.component.html`
})
export class SearchUserComponent extends SearchTemplateComponent implements OnInit {

    constructor(injector: Injector, 
                private serverService: ServerService){
        super(injector);
        this.categorySearch = userCat.CategorySearch;
        this.categoryKey = userCat.CategoryKey;
        this.dataList = new Array<User>();
        this.primaryKey = 'account';
        this.parentUrl = this.serverService.getUserUrl('')
    }

    ngOnInit(){
        let url = this.serverService.getUserUrl('list');
        this.GetList(url, this.primaryKey);      
    }

    searchClick(){
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey); 
        let url = this.serverService.getUserUrl(this.searchWord);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    }

    checkChange(item, checked){
        //console.log(this.delArray.filter(object => object.primaryKey == item[this.primaryKey]));
        this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
    }

    deleteClick(){
        this.Delete();
    }

    searchChange(value){
        this.selectCat = (value === '單位分類') ? true : false;
    }
}
