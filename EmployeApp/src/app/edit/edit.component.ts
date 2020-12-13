import {​​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ UserService }​​​​​​​​ from"../user.service";
import {​​​​​​​​ FormGroup, FormControl, Validators }​​​​​​​​ from'@angular/forms';
import {​​​​​​​​ ActivatedRoute }​​​​​​​​ from'@angular/router';
 
@Component({​​​​​​​​
selector:'app-edit',
templateUrl:'./edit.component.html',
styleUrls: ['./edit.component.css']
}​​​​​​​​)
export class EditComponent implements OnInit {​​​​​​​​
formData;
empname="";
empsalary="";
empage="";

 
msg="";
public persondata = [];
constructor(private myservice: UserService,private incomingRouter: ActivatedRoute) {​​​​​​​​
this.formData = new FormGroup({​​​​​​​​ 
name:new FormControl(""),
salary:new FormControl(""), 
age:new FormControl(""),
    }​​​​​​​​); 
this.myservice.getData().subscribe((data) => {​​​​​​​​
this.persondata = Array.from(Object.keys(data), k=>data[k]);
console.log(this.persondata);
   }​​​​​​​​);
  }​​​​​​​​
 
updateData(id){​​​​​​​​
this.myservice.updateData(id).subscribe(
      (response) => {​​​​​​​​
console.log(response);
this.msg="Updated successfully";
// this.persondata.forEach((obj)=>{​​​​​​​​console.log(obj)}​​​​​​​​);
      }​​​​​​​​,
      (error) => {​​​​​​​​
console.log(error);
this.msg=error.message;
      }​​​​​​​​
    );
  }​​​​​​​​
 
onClickSubmit(data){​​​​​​​​
var formData: any =new FormData();
formData.append("name",data.name);
formData.append("salary",data.salary);
formData.append("age",data.age);
 
this.myservice.updateData(data).subscribe(
      (response) => {​​​​​​​​
console.log(response);
this.msg="Updated successfully";
// this.persondata.forEach((obj)=>{​​​​​​​​console.log(obj)}​​​​​​​​);
      }​​​​​​​​,
      (error) => {​​​​​​​​
console.log(error);
this.msg=error.message;
      }​​​​​​​​
    );
  }​​​​​​​​
 

ngOnInit(): void {​​​​​​​​
this.empname=(this.incomingRouter.snapshot.paramMap.get("p1"));
this.empsalary=(this.incomingRouter.snapshot.paramMap.get("p2"));
this.empage=(this.incomingRouter.snapshot.paramMap.get("p3"));
  }​​​​​​​​
}​​​​​​​​

