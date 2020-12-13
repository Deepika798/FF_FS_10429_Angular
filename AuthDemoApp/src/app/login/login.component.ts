import {​​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ Router }​​​​​​​​ from'@angular/router';
import {​​​​​​​​ FormGroup, FormControl, Validators }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ LoginService }​​​​​​​​ from'../service/login.service';
 
@Component({​​​​​​​​
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls: ['./login.component.css']
}​​​​​​​​)
export class LoginComponent implements OnInit {​​​​​​​​
formdata;
emailId;
password;
retUrl: any;
 
constructor(private router: Router, private authService: LoginService) {​​​​​​​​ }​​​​​​​​
 
ngOnInit(): void {​​​​​​​​
this.formdata = new FormGroup({​​​​​​​​ 
emailId:new FormControl(""),
password:new FormControl(""),
    }​​​​​​​​);
  }​​​​​​​​
 
onFormSubmit(loginForm) {​​​​​​​​
this.authService.login(loginForm.emailId, loginForm.password).subscribe(data=> {​​​​​​​​
if(this.retUrl!=null) {​​​​​​​​
this.router.navigate( [this.retUrl]);
      }​​​​​​​​ else {​​​​​​​​
this.router.navigate( ['dashboard']);
      }​​​​​​​​
    }​​​​​​​​);
  }​​​​​​​​
 
/*onClickSubmit(data){​​​​​​​​
    this.emailId=data.emailId
    this.password=data.password



    if(this.emailId=="lingad2@hcl.com" && this.password=="hcl"){​​​​​​​​
      alert ("Dear " + this.emailId + ",You are successfully registered");
      //this.service.raiseEvent(data.fullname);
      //this.router.navigate(["/welcome" ]);
      //this.service.raiseEvent(data.fullname);
      this.router.navigate(["/dashboard",{​​​​​​​​p1:"Dear!" + this.emailId + ",You are successfully registered" }​​​​​​​​]); // component related routing
    }​​​​​​​​ else {​​​​​​​​
      alert("Enter valid email id and password!")
    }​​​​​​​​
  }​​​​​​​​
*/
}​​​​​​​​

