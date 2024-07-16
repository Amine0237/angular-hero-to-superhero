import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // to create custom directive: $ ng g d name-of-directive
  number = 21;
  // isClicked = false;

  // onClick(){
  //   this.isClicked = true;
  // }
}
