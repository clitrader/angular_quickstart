import { CustomerService } from './customer.service';
// import { CustomerComponent } from './../customer/customer.component';
import { Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}
