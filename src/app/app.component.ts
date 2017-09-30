import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
<<<<<<< HEAD
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
=======
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
>>>>>>> 4febb98bde2af883290b925c0c539097788c0aa3
