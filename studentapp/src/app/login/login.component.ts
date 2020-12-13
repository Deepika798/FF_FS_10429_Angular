import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //component related routing

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //msg:string;
  //clickEvent(){​​​​​​​​
  // this.msg='Welcome User!! This portal helps you to learn Java, SQL, HTML, CSS and JS';
  // return this.msg;
  //}​​​​​​​​
  onClickSubmit(data) {
    if (data.username == "hcl" && data.password == "hcl") {
      alert("You are successfully logged in");
      this.router.navigate(["/user-home"]); // component related routing
    } else {
      alert("You have wrongly entered username or password..Please try again!")
    }
  }
  constructor(private router: Router) { }​​​​​​​​ //component related routing

  ngOnInit(): void {

  }

}

