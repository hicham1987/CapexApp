import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {MetaModule} from './meta/meta.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {ToastrModule} from 'ngx-toastr';
import {AuthService} from './auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './auth-guard.service';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {ChartsModule} from 'ng2-charts';


import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {DashboardComponent} from './tableau-de-bord/tableau-de-bord.component';
import {NewUserDialogComponent, UserProfileComponent} from './membre-du-projet/user-profile.component';
import {TableListComponent} from './nomenclature/table-list.component';
import {UpgradeComponent} from './documentation/upgrade.component';
import {SessionModule} from './session/session.module';
import {AoStatusComponent} from './ao-status/ao-status.component';
import {EmployeesModule} from './employees/employees.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SituationComponent} from './situation/situation.component';
import {AgGridModule} from 'ag-grid-angular/main';
import {ChartTestComponent} from './chart-test/chart-test.component';
//import { ChartModule } from 'modules/chart.module'
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';


@NgModule({

    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        NewUserDialogComponent,
        TableListComponent,
        UpgradeComponent,
        AoStatusComponent,
        SituationComponent,
        ChartTestComponent,
        jqxChartComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MetaModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
        ComponentsModule,
        SessionModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth-firebase'),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        RouterModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        EmployeesModule,
        AngularFireAuthModule,
        CommonModule,
        ChartsModule,
        AgGridModule.withComponents([]),
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent],
    entryComponents: [NewUserDialogComponent]
})
export class AppModule {
}
