import {​​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ FormGroup, FormControl }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ Router }​​​​​​​​ from'@angular/router';
 
@Component({​​​​​​​​
selector:'app-registration',
templateUrl:'./registration.component.html',
styleUrls: ['./registration.component.css']
}​​​​​​​​)
export class RegistrationComponent implements OnInit {​​​​​​​​
title='Welcome to Student Portal Registration Form';
months=["January","February","March","April","May","June","July","August","September","October","November","December"];
isavailable = true;
todaydate=new Date();
formdata;
username;
password;
confirmPassword;
hscMark;
trainingCost;
preKnowledge;
dateOfJoining;
registrationMonth;
 

myClickFunction(event) {​​​​​​​​
//just added console.log which will display the event details in browser on click of the button.
alert("You have successfully registered with us!!!!!");
console.log(event);
 }​​​​​​​​
changemonths(event) {​​​​​​​​
alert("Changed month from the Dropdown");
console.log(event);
 }​​​​​​​​
constructor(private router: Router) {​​​​​​​​ }​​​​​​​​
 
ngOnInit(): void {​​​​​​​​
this.formdata = new FormGroup({​​​​​​​​ 
username:new FormControl(""),
password:new FormControl(""), 
confirmPassword:new FormControl(""),
registrationMonth:new FormControl(""), 
preKnowledge:new FormControl(""),
dateOfJoining:new FormControl("")
   }​​​​​​​​); 

  }​​​​​​​​
onClickSubmit(data){​​​​​​​​
this.username=data.username
this.password=data.password
this.confirmPassword=data.confirmPassword
this.registrationMonth=data.registrationMonth
this.preKnowledge=data.preKnowledge
this.dateOfJoining=data.dateOfJoining

if(data.username.length>0 && this.password.length>0 && this.confirmPassword.length>0 && this.password==this.confirmPassword){​​​​​​​​
alert ("You are successfully registered");
this.router.navigate(["home",{​​​​​​​​p1:"Dear!" + data.username + ",You are successfully registered" }​​​​​​​​]); // component related routing
    }​​​​​​​​ else {​​​​​​​​
alert("Not registered, as you are missing mandatory fields!")
    }​​​​​​​​
  }​​​​​​​​
}​​​​​​​​


