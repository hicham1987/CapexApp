import { Component, OnInit } from '@angular/core'

import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { EmployeeService } from '../shared/employee.service';
import { AuthService } from './../../auth.service';
import { ToastrService } from 'ngx-toastr';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private tostr: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    const data = employeeForm.value;
    const uid = this.auth.loggedInUser.uid;

    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(data, uid);
    } else {
      this.employeeService.updateEmployee(data);
    }

    this.resetForm(employeeForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      numAo: '',
      sousFamille: '',
      situationAo: '',
      montantDeLaCad: 0,
    }
  }

  foods = [
    {value: 'annulé', viewValue: 'annulé'},
    {value: 'en-cours-de-preparation', viewValue: 'en-cours-de-preparation'},
    {value: 'publié', viewValue: 'publié'},
    {value: 'à ouvrir', viewValue: 'à ouvrir'},
    {value: 'attente avis technique', viewValue: 'attente avis technique'},
    {value: 'étude commercial', viewValue: 'étude commercial'}
  ];



}
