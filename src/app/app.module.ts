import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDPComponent } from './department/show-dp/show-dp.component';
import { EditDPComponent } from './department/edit-dp/edit-dp.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEMPComponent } from './employee/show-emp/show-emp.component';
import { EditEMPComponent } from './employee/edit-emp/edit-emp.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDPComponent,
    EditDPComponent,
    EmployeeComponent,
    ShowEMPComponent,
    EditEMPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
