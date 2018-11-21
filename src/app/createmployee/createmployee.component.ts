import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emp } from '../Model/emp';

@Component({
  selector: 'app-createmployee',
  templateUrl: './createmployee.component.html',
  styleUrls: ['./createmployee.component.css']
})
export class CreatemployeeComponent implements OnInit {
  varbind="default";
  constructor() { }

  ngOnInit() {
  }

  UserFunction(frm:NgForm): void{
    //var emp: Iemployee;
    //emp=empRefform.value;
    //this.emplist.push(emp);
    console.log(frm.value);
  }
}
