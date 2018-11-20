import { Component, OnInit } from '@angular/core';
import { emp } from '../Model/emp';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employees: emp[] = [
    {
      id: 1,
      name: 'Shaunak Sheth',
      gender: 'Male',
      email: 'shaunak.sheth@gmail.com',
      phoneNumber: 7738371177,
      contactPreference: 'Phone',
      dateOfBirth: new Date('05/29/1978'),
    department: 'technology',
    isActive: true,
    photoPath: 'assets/images/parth.png'
    },
    {
      id: 2,
      name: 'Chandrabhan Chouhan',
      gender: 'Male',
      email: 'cbs.chauhan@gmail.com',
      phoneNumber: 9838371177,
      contactPreference: 'Phone',
      dateOfBirth: new Date('12/01/1980'),
      department: 'technology',
      isActive: true,
      photoPath: 'assets/images/parth.png'
    },
    {
      id: 3,
      name: 'Ruby Choubey',
      gender: 'Female',
      email: 'ruby.choubey@gmail.com',
      phoneNumber: 9938371177,
      contactPreference: 'EMAIL',
      dateOfBirth: new Date('10/09/1984'),
    department: 'INFRA',
    isActive: true,
    photoPath: 'assets/images/anu.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
