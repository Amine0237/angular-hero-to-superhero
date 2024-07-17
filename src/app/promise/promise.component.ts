import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  isOnline = false;
  status = 'offline';
  myPromise: any;

  constructor(){}

  ngOnInit():void {
    this.getStatus();
    this.myPromise.then((res: any) => {
      console.log(res);
      this.checkLogic();
    }, 
    (err: any) => {
      console.log(err);
    });
    
  }

  getStatus(){
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.isOnline = true;
        resolve(this.isOnline);
      }, 100);
    })
    
  }

  checkLogic(){
    this.status = this.isOnline?'online':'offline';
  }

}
