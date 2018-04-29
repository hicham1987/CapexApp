import { Component, OnInit } from '@angular/core'

import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeService } from '../shared/employee.service';
import { AuthService } from './../../auth.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private tostr: ToastrService,
    private auth: AuthService,
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
      numDa: null,
      designation: '',
      numDossier: null,
      chefP: '',
      estimation: null,
      numRfi: null,
      situationRfi: '',
      numAo: null,
      situationAo: '',
      montantDeLaCad: 0,
    }
  }

  Rfis = [
    { value: 'annulé', viewValue: 'annulé' },
    { value: 'en-cours-de-preparation', viewValue: 'en-cours-de-preparation' },
    { value: 'publié', viewValue: 'publié' },
    { value: 'à ouvrir', viewValue: 'à ouvrir' },
    { value: 'attente evaluation RFI', viewValue: 'attente evaluation RFI' },
    { value: 'attente CGAO', viewValue: 'attente CGAO' },
    { value: 'attente GEL', viewValue: 'attente GEL' },
    { value: 'attente lancement AO', viewValue: 'attente lancement AO' }
  ];

  Aos = [
    {value: 'annulé', viewValue: 'annulé'},
    {value: 'publié', viewValue: 'publié'},
    {value: 'à ouvrir', viewValue: 'à ouvrir'},
    {value: 'attente avis technique', viewValue: 'attente avis technique'},
    {value: 'étude commercial', viewValue: 'étude commercial'},
    {value: 'attente CAD', viewValue: 'attente CAD'},
    {value: 'attente AE', viewValue: 'attente AE'},
    {value: 'attente validation contrat-Attribué ', viewValue: 'attente validation contrat-Attribué'},
    {value: 'Soldé', viewValue: 'Soldé'},
  ];



}
