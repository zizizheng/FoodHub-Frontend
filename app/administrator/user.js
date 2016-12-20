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
            // 字串還是數字
            auth: 1,
            account: this.account,
            password: this.password
        };
        return object;
    };
    return User;
}());
exports.User = User;
exports.CategorySearch = ['', '姓名', '地區', '帳號'];
exports.CategoryKey = ['', 'user_name', 'area', 'account'];
exports.Area = ['', '台中', '高雄'];
exports.Auth = ['', '一般使用者', '管理員'];
//# sourceMappingURL=user.js.map