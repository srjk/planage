import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  constructor(private service: UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.service.getUserAuthStatus()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
