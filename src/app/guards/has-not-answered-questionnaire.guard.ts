import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {QuestionnaireDataService} from '../services/questionnaireData.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasNotAnsweredQuestionnaireGuard implements CanActivate {
  constructor(private questionnaireDataService: QuestionnaireDataService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.questionnaireDataService.isComplete().pipe(map(value => {
      if (!value) { return true; }
      return this.router.createUrlTree(['/results']);
    }));
  }
}
