
    

import {​​​​​​​​​ NgModule }​​​​​​​​​​​​​​​​ from'@angular/core';
import {​​​​​​​​​​​​​​​​ Routes, RouterModule }​​​​​​​​​​​​​​​​ from'@angular/router';
import {​​​​​​​​​​​​​​​​ LoginComponent }​​​​​​​​​​​​​​​​ from'./login/login.component'; 
import {​​​​​​​​​​​​​​​​ DashboardComponent }​​​​​​​​​​​​​​​​ from'./dashboard/dashboard.component'; 
import {​​​​​​​​​​​​​​​​ WelcomeComponent }​​​​​​​​​​​​​​​​ from'./welcome/welcome.component'; 
import {​​​​​​​​​​​​​​​​ AuthGuard }​​​​​​​​​​​​​​​​ from'./guard/auth.guard';

const routes: Routes = [
  {​​​​​​​​​​​​​​​​path:"login", component:LoginComponent}​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​path:"dashboard", component:DashboardComponent, canActivate: [AuthGuard]}​​​​​​​​​​​​​​​​,
  {​​​​​​​​​​​​​​​​path:"welcome", component:WelcomeComponent}​​​​​​​​​​​​​​​​
];

@NgModule({​​​​​​​​​​​​​​​​
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}​​​​​​​​​​​​​​​​)
export class AppRoutingModule {​​​​​​​​​​​​​​​​ }​​​​​​​​​​​​​​​​  
export const RoutingComponent = [LoginComponent,DashboardComponent,WelcomeComponent];

