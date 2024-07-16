import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(private router: Router){}
  
  goToHome(){
    this.router.navigate(['home']);
  }

  goToProducts(){
      this.router.navigate(['products']);
  }

  goToAbout(){
      this.router.navigate(['about']);
  }

  goToContact(){
      this.router.navigate(['contact']);
  }

  goToOffers(){
      this.router.navigate(['offers']);
  }

  goToAdmin(){
    this.router.navigate(['admin']);
  }

}
