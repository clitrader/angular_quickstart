// import { CustomerComponent } from './customer/customer.component';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,  // Used to simplify templateUrl path across different folders
  selector: 'my-app',
  templateUrl: 'app.component.html',
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
