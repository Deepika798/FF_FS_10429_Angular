import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RegistrationComponent } from './registration/registration.component'; 
import { UserhomeComponent } from './userhome/userhome.component'; 
import { WelcomeComponent } from './welcome/welcome.component'; 
import { LoginComponent } from './login/login.component'; 
import { EditComponent } from './edit/edit.component'; 
 
const routes: Routes = [
  //{path:"registration", component:RegistrationComponent},
  {path:"userhome", component:UserhomeComponent},
  {path:"userhome/:p1", component:UserhomeComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"login", component:LoginComponent},
  {path:"edit", component:EditComponent},
  {path:"edit/:p1", component:EditComponent},
  {path:"edit/:p2", component:EditComponent},
  {path:"edit/:p3", component:EditComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [UserhomeComponent,WelcomeComponent,LoginComponent,EditComponent];