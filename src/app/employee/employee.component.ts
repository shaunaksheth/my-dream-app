import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name="Employee Information"
  FirstName="Shaunak"
  LastName="Sheth"
  Gender="Male"
  Age=40
  constructor() { }
  display_name():string
  {
    return this.FirstName+ " "+this.LastName;
  }

ShowFaculty: boolean = true;
Faculty: string = "Bijal Sheth";

Subjects: string[] = ["MS.NET", "Java", "SharePoint"];

employees: any[] = [
  {
code: 'emp101', name: 'Shaunak', gender: 'Male', annualSalary: 5500, dateOfBirth:'05/29/1978', emptype:1
},
{
  code: 'emp102', name: 'Viral', gender: 'Male', annualSalary: 5700.95, dateOfBirth:'9/09/1979', emptype:2
},
{
  code: 'emp103', name: 'Chandra', gender: 'Male', annualSalary: 5800.908, dateOfBirth:'12/08/1980'
 }
];
ngOnInit() {
  }
emp: Employee = new Employee(1,"Ritesh",2222,0);
}
