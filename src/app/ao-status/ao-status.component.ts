import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../employees/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeesComponent } from '../employees/employees.component'
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-ao-status',
  templateUrl: './ao-status.component.html',
  styleUrls: ['./ao-status.component.css']
})
export class AoStatusComponent implements OnInit {


  constructor(
    private dataService: EmployeeService,
    private tostr: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(dataForm: NgForm) {
    const data = dataForm.value;
    const uid = this.auth.loggedInUser.uid;

    if (dataForm.value.$key == null) {
      this.dataService.insertEmployee(dataForm.value, uid);
    } else {
      this.dataService.updateEmployee(dataForm.value);
    }

    this.resetForm(dataForm);
    this.tostr.success('Submitted Succcessfully', 'Ao_status Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) {
      employeeForm.reset();
    }

    this.dataService.selectedEmployee = {
      $key: null,
      numDa : null,
      designation : '',
      numDossier : null,
      chefP: '',
      estimation:null,
      numRfi:null,
      situationRfi:'',
      numAo :null,
      situationAo :'',
      montantDeLaCad :0,
    };
  }
}
