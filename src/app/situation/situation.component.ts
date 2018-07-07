import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeService } from '../employees/shared/employee.service';
import { Employee} from '../employees/shared/employee.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import {MatSort,MatSortable, MatTableDataSource} from '@angular/material'

import { AuthService } from './../auth.service';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {
  //sorting
  @ViewChild(MatSort) Sort:MatSort;
  dataSource;

  key: string = 'numDa'; //set default

  reverse: boolean = false;

  sort(key){

    this.key = key;

    this.reverse = !this.reverse;

  }
   /**This lines for grid sorting and pagination */
   private gridApi;
   private gridColumnApi;
   private columnDefs;
   private sortingOrder;
   /**This lines for grid sorting and pagination */
  employeeList: Employee[];
  selecteduser;
  public users;

  constructor(
    private employeeService: EmployeeService,
    private auth: AuthService,
    private db: AngularFireDatabase,
    private tostr: ToastrService,
    private firebase :AngularFireDatabase
   
  ) {
    this.columnDefs=[
      {
          headerName:"numDa",
          field:"numDa",
          width:150,
          sortingOrder:["asc","desc"]
      },
      {
          headerName:"designation",
          field:"designation",
          width:150

      }
  ];
}
onGridReady(params){
  //this.loadEmployeeData(data.value['$key']);
  this.gridApi=params.api;
  this.gridColumnApi=params.columnApi;
  let dataValue =[{"numDa":"cc", "designation":22}]
  params.api.setRowData(dataValue);
}

  ngOnInit() {
    this.loadUsers();
    this.loadEmployeeData();
    this.dataSource.sort= this.sort;  
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

//  public filterBooks(): void {
  //  this.employeeList = this.db.list('/employees', {
    //    query: {
      //      orderByChild: 'title',
        //    equalTo: 'My book #1',
        //}
    //});
//}
}
