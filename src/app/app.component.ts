import { Component,ViewContainerRef } from '@angular/core';
//Dashboard
import { OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AsyncPipe } from '@angular/common';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isLoggedIn$: Observable <Boolean>;
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  public sidebar: boolean;

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor( public location: Location, private router: Router,private authService: AuthService, private route: ActivatedRoute) {
      this.sidebar = true;
  }

  ngOnInit() {
      $.material.init();
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });

       this.router.events.subscribe((event:any) => {
          this.navbar.sidebarClose();
          if (event instanceof RoutesRecognized) {
            try {
                const data = event.state.root.firstChild.data;
                if ('sidebar' in data && data['sidebar'] === false) {
                    this.sidebar = false;
                } else {
                    this.sidebar = true;
                }
            } catch (e) {
                // pass
            }
          }
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else
                 window.scrollTo(0, 0);
         }
      });
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }
      
  }
  ngAfterViewInit() {
      this.runOnRouteChange();
  }
  isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }
 }
