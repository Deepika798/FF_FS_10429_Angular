import {​​​​​​​​ NgModule }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ CommonModule }​​​​​​​​ from'@angular/common';
import {​​​​​​​​ Routes, RouterModule }​​​​​​​​ from'@angular/router'; 
import {​​​​​​​​ RegistrationComponent }​​​​​​​​ from'./registration/registration.component'; 
import {​​​​​​​​ LoginComponent }​​​​​​​​ from'./login/login.component';
import {​​​​​​​​ HomeComponent }​​​​​​​​ from'./home/home.component'; 
import {​​​​​​​​ UserHomeComponent }​​​​​​​​ from'./user-home/user-home.component'; 
 
const routes: Routes = [
  {​​​​​​​​path:"registration", component:RegistrationComponent}​​​​​​​​,
  {​​​​​​​​path:"login", component:LoginComponent}​​​​​​​​,
  {​​​​​​​​path:"home", component:HomeComponent}​​​​​​​​,
  {​​​​​​​​path:"home/:p1", component:HomeComponent}​​​​​​​​,
  {​​​​​​​​path:"user-home/:p1", component:UserHomeComponent}​​​​​​​​

];
@NgModule({​​​​​​​​
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule] 
}​​​​​​​​)
export class AppRoutingModule {​​​​​​​​ }​​​​​​​​ 
export const RoutingComponent = [RegistrationComponent,LoginComponent,HomeComponent,UserHomeComponent];


