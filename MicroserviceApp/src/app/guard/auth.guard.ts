import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {
 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
 
    if (!this.loginService.isUserLoggedIn()) {
      alert('You are not allowed to view this.page. You are redirected to login Page');
      this.router.navigate(["login"], { queryParams: { retUrl: route.url } });
      return false;
 
    }
    return true;
 
  }
 
}