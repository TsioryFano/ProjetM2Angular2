import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AuthentificationService } from '../user/authentification.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(
    private authService: AuthentificationService,
    private router: Router
    ){  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     let authenticated = this.authService.isUserAuthenticated(); 
     if(authenticated == false){
      this.router.navigateByUrl("/login");
      return false;
     } else {
      return true;
     }
  }
}
