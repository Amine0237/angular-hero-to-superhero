// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userRole = 'admin';
  constructor(private router: Router) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(this.userRole !=='admin'){
      this.router.navigate(['access-denied']);
    }
   return true;
  }

}
