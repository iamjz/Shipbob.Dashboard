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
var core_1 = require("@angular/core");
var OrderInfo_1 = require("../../classes/OrderInfo");
var orderinfo_service_1 = require("../../services/orderinfo.service");
var OrderinfoComponent = (function () {
    function OrderinfoComponent(orderinfoservice) {
        this.orderinfoservice = orderinfoservice;
        this.orderinfo = new OrderInfo_1.OrderInfo();
        this.postResult = "";
        this.itemBundleNames = "";
    }
    OrderinfoComponent.prototype.create = function () {
        var _this = this;
        this.orderinfoservice
            .createOrder(this.orderinfo)
            .then(function (result) { return _this.postResult = result; });
        console.log(this.orderinfo.ItemsQty);
    };
    OrderinfoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.orderinfoservice
            .getItemBundleNames()
            .then(function (result) {
            _this.itemBundleNames = result;
            _this.orderinfo.ItemsQty = [{}];
            for (var _i = 0, _a = _this.itemBundleNames; _i < _a.length; _i++) {
                var item = _a[_i];
                var x = [item];
                _this.orderinfo.ItemsQty.push(x);
            }
        });
    };
    return OrderinfoComponent;
}());
OrderinfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'orderinfo-create.component.html'
    }),
    __metadata("design:paramtypes", [orderinfo_service_1.OrderinfoService])
], OrderinfoComponent);
exports.OrderinfoComponent = OrderinfoComponent;
//# sourceMappingURL=orderinfo-create.component.js.map