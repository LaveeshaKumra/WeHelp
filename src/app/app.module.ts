import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AdminComponent } from './admin/admin.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeComponent } from './employee/employee.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditProfileComponent } from './elements/edit-profile/edit-profile.component';
import { ServiceHistoryComponent } from './elements/service-history/service-history.component';
import { ServiceStatusComponent } from './elements/service-status/service-status.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddserviceComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AdminComponent,
    ServicesComponent,
    EmployeeComponent,
    RequestComponent,
    ProfileComponent,
    EditProfileComponent,
    ServiceHistoryComponent,
    ServiceStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    //  positionClass: 'toast-bottom-right',
    //preventDuplicates: true,
  }), // ToastrModule added
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: '',
      component : MainComponent
    }
    ]),
    RouterModule.forRoot([
    {
      path: 'contact',
      component : ContactComponent
    }
    ]),
    RouterModule.forRoot([
    {
      path: 'login',
      component : LoginComponent
    }
    ]),
    RouterModule.forRoot([
    {
      path: 'register',
      component : RegisterComponent
    }
    ]),
    RouterModule.forRoot([
    {
      path: 'addservice',
      component : AddserviceComponent
    }
  ]),
  RouterModule.forRoot([
  {
    path: 'admin',
    component : AdminComponent
  }
]),
RouterModule.forRoot([
{
  path: 'servicePage/:id',
  component : ServicesComponent
}
]),
RouterModule.forRoot([
{
  path: 'empPage',
  component : EmployeeComponent
}
]),
RouterModule.forRoot([
{
  path: 'requestPage/:name/:field',
  component : RequestComponent
}
]),
RouterModule.forRoot([
{
  path: 'profile',
  component : ProfileComponent
}
]),
RouterModule.forRoot([
{
  path: 'service-history',
  component : ServiceHistoryComponent
}
]),
RouterModule.forRoot([
{
  path: 'service-status',
  component : ServiceStatusComponent
}
])


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
