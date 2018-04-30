import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core'

import { EmployeeComponent } from '../employees/employee/employee.component';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service'
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-employees',
  template: `<div class="text-center">
  <h2 class="jumbotron">Espace de saisie de données</h2>
</div>
<div class="">
  <div class="col-sm-7">
    <app-employee></app-employee>
  </div>
  <div class="col-md-3 " style=" display:relative; right:-10%;">
    <app-employee-list></app-employee-list>
  </div>
</div>`,
  providers :[EmployeeService]
})
export class EmployeesComponent  {

  constructor(private employeeService : EmployeeService) { }

}

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatCardModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  exports: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    MatCardModule
  ],
  providers :[EmployeeService]
})
export class EmployeesModule { }