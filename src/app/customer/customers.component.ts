import { CustomerService } from './customer.service';
// import { CustomerComponent } from './../customer/customer.component';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}
