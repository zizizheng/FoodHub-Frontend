"use strict";
var Donor = (function () {
    function Donor() {
    }
    Donor.prototype.checkInput = function () {
        // TODO : 確認各種字串輸入正確與否
    };
    Donor.prototype.getObject = function () {
        var object = {
            donor_name: this.donor_name,
            ic: this.ic,
            phone: this.phone,
            address: this.address,
            area: this.area,
            category: this.category,
            contact: this.contact,
            contact_phone: this.contact_phone,
            email: this.email,
        };
        return object;
    };
    return Donor;
}());
exports.Donor = Donor;
exports.CategorySearch = ['', '姓名', '地區', '分類'];
exports.CategoryKey = ['', 'donor_name', 'area', 'category'];
exports.Category = ['', '個人', '團體'];
exports.Area = ['', '北部', '中部', '南部', '東部'];
//# sourceMappingURL=donor.js.map