import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //msg="";
  formdata;
 
  constructor(private router: Router) { 
  }
 
  
  ngOnInit(): void {
    this.formdata = new FormGroup({ 
      sapcode: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
  }
 
  onClickSubmit(data) {
    
    if( data.sapcode=="51887855" && data.password=="hcl"){
      alert ("You are successfully logged in");
      //this.service.raiseEvent(data.fullname);
      this.router.navigate(["/welcome" ]);
      //this.service.raiseEvent(data.fullname);
     // this.router.navigate(["/welcome"]); // component related routing
      return true;
    } else {
      alert("Enter valid sapcode and password!")
     return false;
    }
  }
  }