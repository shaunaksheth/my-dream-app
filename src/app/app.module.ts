import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpPipe } from './pipes/emp.pipe';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { MyAppRoutingModule } from './my-app-routing/my-app-routing.module';
import { EmpdataService } from './services/empdata.service';
import { EmplistserviceComponent } from './emplistservice/emplistservice.component';

// const appRoutes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path: 'employeeslist', component: EmployeeInfoComponent},
//   {path: 'employees', component: EmployeeComponent},
//   {path: '', redirectTo:'/home', pathMatch: 'full'},
//   {path:'**', component: PageNotFoundComponent}
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ContactusComponent,
    EmpPipe,
    EmployeeInfoComponent,
    PageNotFoundComponent,
    EmplistserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
    MyAppRoutingModule
  ],
  providers: [EmpdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
