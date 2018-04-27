import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs/Observable';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    admin?: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: 'tableau-de-bord', title: 'Tableau de Bord',  icon: 'dashboard', class: '' },
    { path: 'membre-du-projet', title: 'Membre du Projet',  icon:'person', class: '' , admin: true},
    { path: 'formulaire', title: 'Formulaire',  icon:'content_paste', class: '' },
    { path: 'situation', title: 'Situation',  icon:'dashboard', class: '' },
    //{ path: 'meta', title: 'Statut',  icon:'content_paste', class: '' },
    { path: 'documentation', title: 'Documentation',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isLoggedIn$: Observable <Boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   // this.isLoggedIn$ = this.authService.isLoggedIn;
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {

      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  onLogout(){
    this.authService.logout();
  }

  isAdmin(): boolean {
    if (!this.authService.loggedInUser) {
      return false;
    }
    return ( 'isAdmin' in this.authService.loggedInUser && this.authService.loggedInUser['isAdmin']);
  }

}
