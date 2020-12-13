import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  formData;
  static msg: string;
  msg1 = "";
  public persondata = [];
  constructor(private router: Router, private service: UserService, private ref: ChangeDetectorRef, private ngZone: NgZone, private myservice: UserService) {
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.persondata);
    });

    ref.detach();
    setInterval(() => { this.ref.detectChanges(); }, 500);
  }
  updateData(item) {
    this.router.navigate(["/edit", { p1: item.employee_name, p2: item.employee_salary, p3: item.employee_age }]);
  }
  deleteData(id) {
    this.myservice.deleteData(id).subscribe(
      (response) => {
        console.log(response);
        this.msg1 = "Deleted successfully";
        // this.persondata.forEach((obj)=>{​​​​​​​​console.log(obj)}​​​​​​​​);
      },
      (error) => {
        console.log(error);
        this.msg1 = error.message;
      }
    );
  }
  ngOnInit(): void {
    this.service.receivedFilter.subscribe((param: string) => {
      this.ngZone.run(() => {
        WelcomeComponent.msg = param;
      })
    });
  }
  getmsg(): string {
    return WelcomeComponent.msg;
  }
}

