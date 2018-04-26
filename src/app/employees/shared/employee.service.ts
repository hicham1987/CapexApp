import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee, creatorId = null) {
    this.employeeList.push({
      numDa: employee.numDa,
      designation: employee.designation,
      numDossier: employee.numDossier,
      chefP: employee.chefP,
      estimation: employee.estimation,
      numRfi: employee.numRfi,
      situationRfi: employee.situationRfi,
      numAo: employee.numAo,
      situationAo: employee.situationAo,
      montantDeLaCad: employee.montantDeLaCad,
      creatorUid: creatorId
    });
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key,
      {
        numDa: employee.numDa,
      designation: employee.designation,
      numDossier: employee.numDossier,
      chefP: employee.chefP,
      estimation: employee.estimation,
      numRfi: employee.numRfi,
      situationRfi: employee.situationRfi,
      numAo: employee.numAo,
      situationAo: employee.situationAo,
      montantDeLaCad: employee.montantDeLaCad,
      });
  }

  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }

}
