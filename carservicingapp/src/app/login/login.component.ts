import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router) { }
formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")
    })
  }
 
  onClickSubmit(data) {
    /*this.userName=data.userName;
    this.password=data.password;
    this.confirmpassword=data.confirmpassword;*/
    if (data.username=="Deepika" && data.password=="Chowdary") {
      alert("you are sucessfully logged in");
      this.router.navigate(["userhome", { p2: "Dear " + data.username + ",You are successfully logged in" }]);
    } else {
      alert("invalid data");
    }
  }
 
}