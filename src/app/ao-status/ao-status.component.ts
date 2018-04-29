import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../employees/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeesComponent } from '../employees/employees.component'
import { AuthService } from './../auth.service';
import {MatCardModule} from '@angular/material/card';
import { AngularFireDatabase } from 'angularfire2/database';
import { Employee } from '../employees/shared/employee.model';


@Component({
  selector: 'app-ao-status',
  templateUrl: './ao-status.component.html',
  styleUrls: ['./ao-status.component.css']
})
export class AoStatusComponent implements OnInit {
  employeeList: Employee[];
  selecteduser;
  public users;

  constructor(
    private dataService: EmployeeService,
    private employeeService: EmployeeService,
    private tostr: ToastrService,
    private db: AngularFireDatabase,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.resetForm();
    this.loadUsers();
    this.loadEmployeeData();
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
  loadEmployeeData(uid = null) {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y: any = element.payload.toJSON();
        const uuid = uid ? uid : this.auth.loggedInUser.uid;
        if (y.creatorUid === uuid) {
          y['$key'] = element.key;
          this.employeeList.push(y as Employee);
        }
      });
    });
  }
  loadUsers() {
    const u = this.db.list('users/');
    u.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        const y: any = element.payload.toJSON();
        y['$key'] = element.key;
        this.users.push(y);
      });
    });
  }
  onUserSelected(data) {
    const uid = data.value['$key'];
    this.loadEmployeeData(uid);
  }

  isAdmin(): boolean {
    if (!this.auth.loggedInUser) {
      return false;
    }
    return ( 'isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
  }

}
