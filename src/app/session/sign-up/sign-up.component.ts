import { Component, OnInit, Input,Directive,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' },
  providers: [AuthService],
  
})
export class SignUpComponent {
  email: string;
  password: string;
  constructor(public authService: AuthService,public location: Location, private router: Router) {}
/*
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'tableau-de-bord' || titlee === 'signup'){
        return false;
    }
    else {
        return true;
    }
}
*/
}