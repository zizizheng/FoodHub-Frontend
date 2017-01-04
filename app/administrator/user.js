"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.checkInput = function () {
        // TODO : 確認各種字串輸入正確與否
    };
    User.prototype.getObject = function () {
        var object = {
            user_name: this.user_name,
            user_unit: this.user_unit,
            phone: this.phone,
            area: this.area,
            auth: this.auth,
            account: this.account,
            password: this.password
        };
        return object;
    };
    User.prototype.pushData = function (ob) {
        this.user_name = ob.user_name;
        this.user_unit = ob.user_unit;
        this.phone = ob.phone;
        this.area = ob.area;
        this.auth = ob.auth;
        this.account = ob.account;
        this.password = ob.password;
        console.log(ob);
    };
    return User;
}());
exports.User = User;
exports.CategorySearch = ['', '姓名', '地區', '帳號'];
exports.CategoryKey = ['', 'user_name', 'area', 'account'];
exports.Area = ['', '台中', '高雄'];
exports.Auth = ['', '一般使用者', '管理員'];
//# sourceMappingURL=user.js.map