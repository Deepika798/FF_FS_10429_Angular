import { Injectable, EventEmitter, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://dummy.restapiexample.com/api/v1/employees";
  //constructor(private http: HttpClient) {​​​​​​​​ }​​​​​​​​
  getData() {
    return this.http.get(this.apiurl);
  }

  deleteData(id) {

    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/" + id);
  }

  updateData(id) {
    return this.http.put("http://dummy.restapiexample.com/api/v1/update/21" + id, FormData);
  }
  FullName: string;
  receivedFilter: EventEmitter<string>;
  constructor(private http: HttpClient) {
    this.receivedFilter = new EventEmitter<string>();
  }
  raiseEvent(FullName: string): void {
    this.FullName = FullName;
    this.receivedFilter.emit(FullName);
  }
}

