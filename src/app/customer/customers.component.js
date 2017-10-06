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
var customer_service_1 = require("./customer.service");
// import { CustomerComponent } from './../customer/customer.component';
var core_1 = require("@angular/core");
var CustomersComponent = (function () {
    function CustomersComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.customers = this._customerService.getCustomers();
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-customers',
        templateUrl: 'customers.component.html',
        providers: [customer_service_1.CustomerService]
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map