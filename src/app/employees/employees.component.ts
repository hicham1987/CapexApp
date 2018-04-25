import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core'

import { EmployeeComponent } from '../employees/employee/employee.component';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service'
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-employees',
  template: `<div class="text-center">
  <h2 class="jumbotron">Ao Register</h2>
</div>
<div class="row">
  <div class="col-md-7">
    <app-employee></app-employee>
  </div>
  <div class="col-md-5">
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
    CommonModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  exports: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  providers :[EmployeeService]
})
export class EmployeesModule { }