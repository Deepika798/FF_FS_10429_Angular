import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }
}
