import {​​​​​​​​ NgModule }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ CommonModule }​​​​​​​​ from'@angular/common';
import {​​​​​​​​ Routes, RouterModule }​​​​​​​​ from'@angular/router'; 
import {​​​​​​​​ RegistratonComponent }​​​​​​​​ from'./registraton/registraton.component'; 
import {​​​​​​​​ LoginComponent }​​​​​​​​ from'./login/login.component';
import {​​​​​​​​ HomeComponent }​​​​​​​​ from'./home/home.component'; 
import {​​​​​​​​ UserhomeComponent }​​​​​​​​ from'./userhome/userhome.component'; 
 
const routes: Routes = [
  {​​​​​​​​path:"registraton", component:RegistratonComponent}​​​​​​​​,
  {​​​​​​​​path:"login", component:LoginComponent}​​​​​​​​,
  {​​​​​​​​path:"home", component:HomeComponent}​​​​​​​​,
  {​​​​​​​​path:"home/:p1", component:HomeComponent}​​​​​​​​,
  {path:"userhome",component:UserhomeComponent},
  {​​​​​​​​path:"userhome/:p2", component:UserhomeComponent}​​​​​​​​

];
@NgModule({​​​​​​​​
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule] 
}​​​​​​​​)
export class AppRoutingModule {​​​​​​​​ }​​​​​​​​ 
export const RoutingComponent = [RegistratonComponent,LoginComponent,HomeComponent,UserhomeComponent];

