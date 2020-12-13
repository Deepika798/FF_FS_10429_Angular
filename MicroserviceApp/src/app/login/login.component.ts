import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/*
This is the class for LoginComponent having two member variables
 emailid and password to display the form in UI
*/
export class LoginComponent implements OnInit {
  formdata;
  emailId;
  password;
  retUrl: any;
 
  constructor(private router: Router, private authService: LoginService) { }
 
  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailId: new FormControl(""),
      password: new FormControl(""),
    });
  }
 
  onFormSubmit(loginForm) {
    this.authService.login(loginForm.emailId, loginForm.password).subscribe(data => {
      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(['dashboard']);
      }
    });
  }
  checkLogin(EmailId,password){
    if(EmailId=="hcl@hcl.com" && password=="hcl")
      return true;
    return false;  
  }
}