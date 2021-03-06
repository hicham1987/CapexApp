import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AoStatusComponent} from './ao-status/ao-status.component';


import {DashboardComponent} from './tableau-de-bord/tableau-de-bord.component';
import {UserProfileComponent} from './membre-du-projet/user-profile.component';
import {UpgradeComponent} from './documentation/upgrade.component';
import {SituationComponent} from './situation/situation.component';
import {SignUpComponent} from './session/sign-up/sign-up.component';
import {LoginComponent} from './session/login/login.component';
import {ChartTestComponent} from './chart-test/chart-test.component';

const routes: Routes = [
    { path: 'tableau-de-bord',      component: DashboardComponent },
    { path: 'membre-du-projet',   component: UserProfileComponent },
    { path: 'formulaire',        component: AoStatusComponent },
    { path: 'situation',     component: SituationComponent },
    { path: 'documentation',        component: UpgradeComponent },
    { path: 'app-chart-test',        component: ChartTestComponent },
    //{ path: 'meta',        component: MetaSenderComponent },
    { path: 'signup', component: SignUpComponent, data: {sidebar: false}},
    { path: 'login', component: LoginComponent, data: {sidebar: false}},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
