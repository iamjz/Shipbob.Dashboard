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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var OrderinfoService = (function () {
    function OrderinfoService(http) {
        this.http = http;
        this.uri = "http://localhost:52479/api/order";
    }
    OrderinfoService.prototype.createOrder = function (orderinfo) {
        return this.http
            .post(this.uri, orderinfo)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    OrderinfoService.prototype.getItemBundleNames = function () {
        return this.http
            .get(this.uri + "/list")
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    OrderinfoService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + error.statusText
                : "An error occurred.";
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return OrderinfoService;
}());
OrderinfoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OrderinfoService);
exports.OrderinfoService = OrderinfoService;
//# sourceMappingURL=orderinfo.service.js.map