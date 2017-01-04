"use strict";
var common_1 = require('@angular/common');
var Donation = (function () {
    function Donation() {
    }
    Donation.prototype.checkInput = function () {
        // TODO : 確認各種字串輸入正確與否
    };
    Donation.prototype.getObject = function () {
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
    Donation.prototype.pushData = function (ob) {
        this._id = ob._id;
        this.donor_name = ob.donor_name;
        this.item_name = ob.item_name;
        this.expire_dt = new common_1.DatePipe().transform(ob.expire_dt, 'yyyy/MM/dd');
        this.category = ob.category;
        this.weight = ob.weight;
        this.item_unit = ob.item_unit;
        this.item_qt = ob.item_qt;
        this.donate_dt = new common_1.DatePipe().transform(ob.donate_dt, 'yyyy/MM/dd');
        this.memo = ob.memo;
        this.item_unitprice = ob.item_unitprice;
        this.barcode = ob.barcode;
        this.area = ob.area;
    };
    return Donation;
}());
exports.Donation = Donation;
exports.Category = ['', '營養品', '沖泡品', '主食類', '罐頭', '生活用品', '零食', '調味品', '飲料', '生鮮食品', '其他'];
exports.CategorySearch = ['', '品項名稱', '過期日', '品項類別', '倉庫地區'];
exports.CategoryKey = ['', 'item_name', 'expire_dt', 'category', 'area'];
exports.Warehouse = ['', '台中', '高雄'];
//# sourceMappingURL=donation.js.map