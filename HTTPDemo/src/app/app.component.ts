import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements OnInit {

  msg;
  formdata;
  title = 'Http Demo!';
  public personData = [];

  constructor(private myService: UserService, private http: HttpClient) { }
  ngOnInit() {
    this.myService.getData().subscribe((data) => {
      this.personData = Array.from(Object.keys(data), k => data[k]);
    });
    this.formdata = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      salary: new FormControl("")
    });
  }

  onClickSubmit(data) {
    var formData: any = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("salary", data.salary);
    this.http.post("http://dummy.restapiexample.com/api/v1/create", formData).subscribe((response) => {
      console.log(response);
      this.msg = "Added Successfully";
    }, (error) => {
      console.log(error);
      this.msg = "Error";
    })
  }
}




