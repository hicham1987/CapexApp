import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {

      return true;

    }

    this.router.navigate(['/tableau-de-bord']);
    return false;
  }

}