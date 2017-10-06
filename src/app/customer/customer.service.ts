import { Injectable }    from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

const CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) {}

    getCustomers() {
        return this._http.get(CUSTOMER).map((response: Response) => response.json());
    }
}
