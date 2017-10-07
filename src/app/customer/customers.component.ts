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
    // customers: Observable<any[]>;
    // customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit() {

        // any[]: use array when you need to manipulate the data
        this._customerService.getCustomers()
        .then((customers) => this.customers = customers)
        .catch((err) => {
        console.log(err);
    });



    //Promise: <any[]>
    //     this.customers = this._customerService.getCustomers()
    //     .catch((err) => {
    //     console.log(err);
    // });

        //Rx Observable
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });

    }

}
