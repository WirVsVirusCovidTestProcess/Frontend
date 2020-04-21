import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/userData.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasNoAccountGuard implements CanActivate {
  constructor(private userDataService: UserDataService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userDataService.hasUserData().pipe(map(value => {
      if (!value) { return true; }
      return this.router.createUrlTree(['/account']);
    }));
  }
}
