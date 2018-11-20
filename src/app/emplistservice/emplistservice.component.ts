import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../services/empdata.service';

@Component({
  selector: 'app-emplistservice',
  templateUrl: './emplistservice.component.html',
  styleUrls: ['./emplistservice.component.css']
})
export class EmplistserviceComponent implements OnInit {
  employees1: any[];
  
  constructor(private _employeeService: EmpdataService) { }

  ngOnInit() {
    this.employees1=this._employeeService.getEmployees();
  }

}
