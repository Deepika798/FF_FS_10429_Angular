import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistratonComponent } from './registraton/registraton.component';
import { AppRoutingModule } from './app-routing.module';
//import { ChangeTextDirective } from'./change-text.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistratonComponent,
    //ChangeTextDirective,
    LoginComponent,
    HomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
