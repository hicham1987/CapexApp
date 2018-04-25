import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  selecteduser;
  public users;

  constructor(
    private employeeService: EmployeeService,
    private tostr: ToastrService,
    private auth: AuthService,
    private db: AngularFireDatabase
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
