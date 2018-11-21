import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EmplistserviceComponent } from '../emplistservice/emplistservice.component';
import { CreatemployeeComponent } from '../createmployee/createmployee.component';
import { HttpservicecallComponent } from '../httpservicecall/httpservicecall.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employeeslist', component: EmployeeInfoComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'employeeservice', component: EmplistserviceComponent},
  {path: 'createemployee', component: CreatemployeeComponent},
  {path: 'items', component: HttpservicecallComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];


@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class MyAppRoutingModule { }
