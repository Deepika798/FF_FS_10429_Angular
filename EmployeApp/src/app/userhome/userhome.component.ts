import {​​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ Router, ActivatedRoute, ParamMap }​​​​​​​​ from'@angular/router';
import {​​​​​​​​ FormGroup, FormControl, Validators }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ UserService }​​​​​​​​ from'../user.service';
import {​​​​​​​​ HttpClient }​​​​​​​​ from'@angular/common/http';
 
@Component({​​​​​​​​
selector:'app-userhome',
templateUrl:'./userhome.component.html',
styleUrls: ['./userhome.component.css']
}​​​​​​​​)
export class UserhomeComponent implements OnInit {​​​​​​​​
msg = "";
formData;
title = 'HttpDemoApp';
publicpersondata = [];
constructor(private myservice: UserService,private http: HttpClient,private incomingRouter: ActivatedRoute) {​​​​​​​​
this.formData = new FormGroup({​​​​​​​​ 
name:new FormControl(""),
salary:new FormControl(""), 
age:new FormControl(""),
    }​​​​​​​​);
   }​​​​​​​​

ngOnInit(): void {​​​​​​​​
this.msg = (this.incomingRouter.snapshot.paramMap.get("p1"));
  }​​​​​​​​
 
onClickSubmit(data){​​​​​​​​
var formData: any =new FormData();
formData.append("name",data.name);
formData.append("salary",data.salary);
formData.append("age",data.age);
 
this.http.post('http://dummy.restapiexample.com/api/v1/create',formData).subscribe(
      (response)=>{​​​​​​​​
console.log(response);
this.msg="Added successfully";
//alert("Added successfully");
      }​​​​​​​​,
      (error)=> {​​​​​​​​
console.log(error);
this.msg=error.message;
// alert(error.message);
      }​​​​​​​​
    );
  }​​​​​​​​
 
}​​​​​​​​

