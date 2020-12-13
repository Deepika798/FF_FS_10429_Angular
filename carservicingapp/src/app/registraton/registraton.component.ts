 
import {​​​​​​​ Component, OnInit }​​​​​​​​​​​​​​ from'@angular/core';
import {​​​​​​​​​​​​​​ FormGroup, FormControl }​​​​​​​​​​​​​​ from'@angular/forms';
import {​​​​​​​​​​​​​​ Router }​​​​​​​​​​​​​​ from'@angular/router';

@Component({​​​​​​​​​​​​​​
selector:'app-registraton',
templateUrl:'./registraton.component.html',
styleUrls: ['./registraton.component.css']
}​​​​​​​​​​​​​​)
export class RegistratonComponent implements OnInit {​​​​​​​​​​​​​​
title='Welcome to CarServicing App Registration Form';
formdata;
username;
password;
confirmPassword;
FullName;
Gender;
Age;
ContactNumber;

 
myClickFunction(event) {​​​​​​​​​​​​​​
//just added console.log which will display the event details in browser on click of the button.
alert("You have successfully registered with us!!!!!");
console.log(event);
 }​​​​​​​​​​​​​​
constructor(private router: Router) {​​​​​​​​​​​​​​ }​​​​​​​​​​​​​​

ngOnInit(): void {​​​​​​​​​​​​​​
this.formdata = new FormGroup({​​​​​​​​​​​​​​ 
username:new FormControl(""),
password:new FormControl(""), 
confirmPassword:new FormControl(""),
FullName:new FormControl(""),
Gender:new FormControl(""),
Age:new FormControl(""),
ContactNumber:new FormControl("")

   }​​​​​​​​​​​​​​); 
 
  }​​​​​​​​​​​​​​
onClickSubmit(data){​​​​​​​​​​​​​​
this.username=data.username
this.password=data.password
this.confirmPassword=data.confirmPassword
this.FullName=data.FullName
this.Gender=data.Gender
this.Age=data.Age
this.ContactNumber=data.ContactNumber
 
if(data.username.length>0 && this.password.length>0 && this.confirmPassword.length>0 && this.password==this.confirmPassword){​​​​​​​​​​​​​​
alert ("You are successfully registered");
this.router.navigate(["home",{​​​​​​​​​​​​​​p1:"Dear!" + data.FullName + ",You are successfully registered" }​​​​​​​​​​​​​​]); // component related routing
    }​​​​​​​​​​​​​​ else {​​​​​​​​​​​​​​
alert("Not registered, as you are missing mandatory fields!")
    }​​​​​​​​​​​​​​
  }​​​​​​​​​​​​​​
}​​​​​​​​​​​​​​

