  
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import {​​​​​​​​ NgModule }​​​​​​​​ from'@angular/core';
 import {​​​​​​​​ AppComponent }​​​​​​​​ from'./app.component';
import {​​​​​​​​ RegistrationComponent }​​​​​​​​ from'./registration/registration.component';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from'./app-routing.module';
//import {​​​​​​​​ ChangeTextDirective }​​​​​​​​ from'./change-text.directive';
import {​​​​​​​​ LoginComponent }​​​​​​​​ from'./login/login.component';
import {​​​​​​​​ HomeComponent }​​​​​​​​ from'./home/home.component';
import {​​​​​​​​ UserHomeComponent }​​​​​​​​ from'./user-home/user-home.component';
import {​​​​​​​​ FormsModule }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ ReactiveFormsModule }​​​​​​​​ from'@angular/forms';
 
@NgModule({​​​​​​​​
declarations: [
AppComponent,
RegistrationComponent,
//ChangeTextDirective,
LoginComponent,
HomeComponent,
UserHomeComponent
  ],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule
  ],
providers: [],
bootstrap: [AppComponent]
}​​​​​​​​)
export class AppModule {​​​​​​​​ }​​​​​​​​

