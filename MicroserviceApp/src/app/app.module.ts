import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from'@angular/forms';
import { ReactiveFormsModule } from'@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   // RegistrationComponent,
    UserhomeComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }