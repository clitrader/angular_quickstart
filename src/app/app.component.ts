import { CustomerService } from './customer/customer.service';
import { Component } from '@angular/core';


@Component({
  moduleId: module.id,  // Used to simplify templateUrl path across different folders
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [CustomerService]
})
export class AppComponent  {
  // []: attribute binding
  // (): event binding
  name = 'Angular';
  textColor = 'green';


  changeTextColor() {
    this.textColor = this.textColor === 'green' ? 'red' : 'green';
  };
}
