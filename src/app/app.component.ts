import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  //[]: attribute binding
  //(): event binding
  name = 'Angular'; 
  textColor = 'blue';

  changeTextColor(){
    this.textColor=this.textColor==='blue'?'red':'blue'
  };

}
