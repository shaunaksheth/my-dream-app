import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  getEmployees(): any[] {
    return[
  {
  code: 'Emp101', name: 'Susheel', gender: 'Male', annualSalary: 5500, dateOfBirth:'05/29/1978'  
  },
  {
    code: 'Emp102', name: 'Gauri', gender: 'Female', annualSalary: 2700.95, dateOfBirth:'9/09/1979'
  },
  {
    code: 'Emp103', name: 'Chandra', gender: 'Male', annualSalary: 5800.908, dateOfBirth:'12/08/1980'
   }
  ];
}
}