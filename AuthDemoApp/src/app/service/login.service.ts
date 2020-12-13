


import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isloggedIn: boolean;
  private emailId: string;

  login(emailId: any, password: any) {
    this.isloggedIn = true;
    this.emailId = emailId;
    return of(this.isloggedIn);

  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  constructor() {
    this.isloggedIn = false;
  }

  isAdminUser(): boolean {
    if (this.emailId == '@hcl.com') {
      return true;
    }
    return false;
  }


}

