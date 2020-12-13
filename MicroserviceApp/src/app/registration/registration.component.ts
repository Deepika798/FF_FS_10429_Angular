import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-registraton',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/*
This is the class for LoginComponent having two member variables emailid and password
*/
export class RegistrationComponent implements OnInit {
  title = 'Welcome to EmployeApp Form';
    constructor(private router: Router) { }
  formdata; 
  ngOnInit(): void {
    this.formdata = new FormGroup({
      SapCode: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", this.passwordvalidation),
      confirmPassword: new FormControl("", this.confirmPasswordvalidation),
      FullName: new FormControl("", Validators.compose([Validators.required])),
      Age: new FormControl("", Validators.compose([Validators.required])),
      Salary: new FormControl("", Validators.compose([Validators.required])),
      Gender: new FormControl("", Validators.compose([Validators.required])),
      dateofJoining: new FormControl("",Validators.compose([Validators.required])),
    });
  
  
 
  }
  passwordvalidation(formcontrol){
    if(formcontrol.value.length < 5) {
      return {"password":true};
    }
  }
  confirmPasswordvalidation(formcontrol){
    if(formcontrol.value.length < 5) {
      return {"confirmPassword":true};
    }
  }
  onClickSubmit(data) {
    
 
   if (data.confirmPassword == data.password) {
      {alert("Dear!"+ data.FullName + ", You are successfully registered")};
      this.router.navigate(["userhome", { p1: "Dear!" + data.SapCode + data.FullName +  ",You are successfully registered" }]); // component related routing
   } else {
      alert("Password and ConfirmPassword are not Same!!!");
    
}
  }
}