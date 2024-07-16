// src/app/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivateChild {
  userRole = 'admfin';

  constructor(private router: Router) { }

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    

    if(this.userRole !== 'admin'){
      alert('you dont have access');
      return false;
    }
    return true;
  }
}