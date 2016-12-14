export class DonateItem {
    _id: string;
    donor_name: string;
    item_name: string;
    expire_dt: string;
    category: string;
    weight: number;
    item_unit: number;
    item_qt: number;
    donate_dt: string;
    memo: string;
    item_unitprice: number;
    barcode: string;
    area: string;

    public checkInput(){
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(){
        // TODO : 確認 id 與 date 格式如何處理
        let object = { 
            _id: this._id,
            donor_name: this.donor_name,
            item_name: this.item_name,
            expire_dt: Date.parse(this.expire_dt),
            category: this.category,
            weight: this.weight,
            item_unit: this.item_unit,
            item_qt: this.item_qt,
            donate_dt: Date.parse(this.donate_dt),
            memo: this.memo,
            item_unitprice: this.item_unitprice,
            barcode: this.barcode,
            area: this.area
        };

        return object;
    }
}

export let Category = [ '', '品項名稱', '過期日', '品項類別', '倉庫地區'];
export let CategoryKey = [ '', 'item_name', 'expire_dt', 'category', 'area'];
export let Warehouse = ['', '台中', '高雄'];