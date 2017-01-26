"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require("@angular/common");
var postSystem_service_1 = require("./../service/postSystem.service");
var server_service_1 = require("./../service/server.service");
var core_1 = require("@angular/core");
var ExpiryComponent = (function () {
    function ExpiryComponent(serverService, postSystemService) {
        this.serverService = serverService;
        this.postSystemService = postSystemService;
        this.expiries = [];
        this.title = '三周內到期貨品';
    }
    ExpiryComponent.prototype.ngOnInit = function () {
        this.getList(21);
    };
    ExpiryComponent.prototype.getList = function (days) {
        var _this = this;
        var url = this.serverService.getExpiryUrl(days);
        this.postSystemService.getDataList(url)
            .subscribe(function (data) {
            _this.expiries = data;
            if (days % 7 == 0)
                _this.title = days / 7 + '周內到期貨品';
            else
                _this.title = days + '天內到期貨品';
        }, function (error) {
            swal('Do not find expiries');
            _this.expiries = [];
        }, function () { return _this.dealIdAndDate(); });
    };
    ExpiryComponent.prototype.dealIdAndDate = function () {
        var pipe = new common_1.DatePipe();
        for (var _i = 0, _a = this.expiries; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.item_id != undefined)
                item.item_id = item.item_id.slice(-8);
            if (item.expire_dt != undefined)
                item.expire_dt = pipe.transform(item.expire_dt, 'yyyy/MM/dd');
        }
        console.log(this.expiries);
    };
    ExpiryComponent.prototype.iconHover = function (value) {
        if (value)
            $('#iExpiry').addClass('flash');
        else
            $('#iExpiry').removeClass('flash');
    };
    ExpiryComponent.prototype.iconClick = function () {
        var comp = this;
        swal({
            title: '輸入距離今日之過期天數',
            input: 'text',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
        }).then(function (value) {
            value = parseInt(value);
            console.log(value);
            if (!isNaN(value)) {
                if (value < 1 || value > 30)
                    swal('範圍為 1 ~ 30', '', 'warning');
                else
                    comp.getList(value);
            }
            else
                swal('請輸入數字', '', 'warning');
        });
    };
    return ExpiryComponent;
}());
ExpiryComponent = __decorate([
    core_1.Component({
        selector: 'expiry',
        templateUrl: "app/expiry/expiry.component.html"
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService,
        postSystem_service_1.PostSystemService])
], ExpiryComponent);
exports.ExpiryComponent = ExpiryComponent;
//# sourceMappingURL=expiry.component.js.map