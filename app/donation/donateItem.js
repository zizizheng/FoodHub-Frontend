"use strict";
var DonateItem = (function () {
    function DonateItem() {
    }
    DonateItem.prototype.checkInput = function () {
        // TODO : 確認各種字串輸入正確與否
    };
    DonateItem.prototype.getObject = function () {
        // TODO : 確認 id 與 date 格式如何處理
        var object = {
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
    };
    return DonateItem;
}());
exports.DonateItem = DonateItem;
exports.Category = ['', '營養品', '沖泡品', '主食類', '罐頭', '生活用品', '零食', '調味品', '飲料', '生鮮食品', '其他'];
exports.CategorySearch = ['', '品項名稱', '過期日', '品項類別', '倉庫地區'];
exports.CategoryKey = ['', 'item_name', 'expire_dt', 'category', 'area'];
exports.Warehouse = ['', '台中', '高雄'];
//# sourceMappingURL=donateItem.js.map