// src/app/can-match.guard.ts
import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanMatch {
  userRole = 'admin';

  constructor(private router: Router) { }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    
    if(this.userRole !== 'admin'){
      this.router.navigate(['access-denied']);
    }
    return true;
  }

}
