import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://localhost:2233/employee/fetchData";
 
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }
  deleteData(id){
    return this.http.get("http://localhost:2233/employee/deleteData/2"+id);
  }
}
