import { Injectable } from '@angular/core';
import { AuthService } from '../Injectable/AuthService';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('Entered into auth guard');
    console.log(`User is logged in ${this.authService.isLoggedIn()}`);
    if (!this.authService.isLoggedIn()) {
      return false;
    }
    return true;
  }
}
