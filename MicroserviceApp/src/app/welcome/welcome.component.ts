import { Component, OnInit ,ChangeDetectorRef,NgZone} from'@angular/core';
import {UserService} from '../user.service';
import { UserhomeComponent } from'../userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 
@Component({
selector:'app-welcome',
templateUrl:'./welcome.component.html',
styleUrls: ['./welcome.component.css']
})
/*
This is the class for WelcomeComponent having  member variables like 
name ,age ,salary to display the form in UI
*/
export class WelcomeComponent implements OnInit {
  msg;
  formdata;
  title = 'EmployeeApp!';
  public personData = [];
 
  constructor(private myService: UserService, private http: HttpClient) { }
  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      salary: new FormControl("")
    });
  }
msg1="";
onFormSubmit(data) {
  var formData:any=new FormData();
  formData.append("name",data.name);
  formData.append("salary",data.salary);
  formData.append("age",data.age);
  this.http.post('http://localhost:2233/employee/fetchData',formData).subscribe(
    (response)=> {
      console.log(response);
      this.msg1="Added SuccessFully";
    },
    (error)=>{
      console.log(error);
      this.msg1=error.error;
    })
   }
}



