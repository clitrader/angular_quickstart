import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  // []: attribute binding
  // (): event binding
  name = 'Angular';
  textColor = 'green';
  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Eric'},
    {id: 4, name: 'Sally'},
    {id: 5, name: 'Bob'},
    {id: 6, name: 'David'},
    {id: 7, name: 'Nancy'}
  ];

  changeTextColor() {
    this.textColor = this.textColor === 'green' ? 'red' : 'blue';
  };
}
