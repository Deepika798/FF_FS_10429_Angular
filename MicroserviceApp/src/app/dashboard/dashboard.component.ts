import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  persondata1: any[];
 
  constructor(private myService: UserService, private http: HttpClient) { }
  public personData=[];
  ngOnInit(): void {
    this.myService.getData().subscribe((data) => {
      this.personData = Array.from(Object.keys(data), k => data[k]);
    });
    
  }
  msg: string;
  deleteData(id) {
  this.http.delete("http://localhost:2233/employee/deleteData/"+id).subscribe((responce) => {
  console.log(responce);
  this.msg = "The record "+id+"deleted successfully";
   }, (error) => {
  console.log(error);
  this.msg = error;
   })
   }
 
  getDataById(id) {
    this.http.get("http://localhost:2233/employee/getData/"+id).subscribe((data)=>{
  this.persondata1=Array.from(Object.keys(data),k=>data[k]);
  });
  }
}