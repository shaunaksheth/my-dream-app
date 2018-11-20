import { EmptyExpr } from "@angular/compiler";

export enum EmployeeType{Daily=0,Contract,Retired,other}

export class Employee{
    id: number;
    name: string;
    salary: number;
    employeeType: number;
    constructor(id:number,name:string,sal:number,emptype:number){
        this.id=id;
        this.name=name;
        this.salary=sal;
        this.employeeType=emptype;
    }
 }