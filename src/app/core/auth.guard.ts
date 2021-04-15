import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from '../transport/response/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const auth = JSON.parse(sessionStorage.getItem('auth')) as LoginResponse;

    if (auth && auth.accesToken != null) {
      return true;
    }
    else {
      this.router.navigate(['login']);
    }

    return false;


  }

}
