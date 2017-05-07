import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserModel } from "../../../model/account/userModel";
@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // currentUser:UserModel={userId:"",email:"",lastLoginTime:"",lastLoginIP:"",status:"",phone:"",isDelete:false,createDate:"",modifyByUserId:"",createByUserId:"",role={userId:"",userInfoId:"",}};
  currentUser:UserModel;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  loginAuth(userModel:UserModel):Observable<boolean>{
    //need to save the user, role and permission information in here.
    this.currentUser=userModel;
    return Observable.of(true);
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
