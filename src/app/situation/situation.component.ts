import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeService } from '../employees/shared/employee.service';
import { Employee} from '../employees/shared/employee.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {
  employeeList: Employee[];
  selecteduser;
  public users;

  constructor(
    private employeeService: EmployeeService,
    private auth: AuthService,
    private db: AngularFireDatabase,
    private tostr: ToastrService,
  ) {

  }

  ngOnInit() {
    this.loadUsers();
    this.loadEmployeeData();
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
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }
}
