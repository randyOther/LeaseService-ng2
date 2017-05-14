import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserModel } from "../../../model/account/userModel";
import { LocalStorageService } from "angular-2-local-storage";
@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // currentUser:UserModel={userId:"",email:"",lastLoginTime:"",lastLoginIP:"",status:"",phone:"",isDelete:false,createDate:"",modifyByUserId:"",createByUserId:"",role={userId:"",userInfoId:"",}};
  currentUser:UserModel;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private storageService:LocalStorageService){
  }
  login(): Observable<boolean> {
    var loginState=this.storageService.get("loginState");
    if(loginState){
      this.storageService.set("loginState",true);
    }
    else{this.storageService.add("loginState",true);}
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  loginAuth(user:UserModel):Observable<boolean>{
    //need to save the user, role and permission information in here.
    var loginState=this.storageService.get("loginState");
    var userInfo=this.storageService.get("user");
    if(loginState){
      this.storageService.set("loginState",true);
      this.storageService.set("user",user.rerutnModel);
    }
    else{
      this.storageService.set("loginState",true);
      this.storageService.set("user",user.rerutnModel);
  }
    this.isLoggedIn=user.success;
    return Observable.of(this.isLoggedIn);
  }
  logout(): void {
    this.isLoggedIn = false;
    this.storageService.remove("loginState");
    this.storageService.remove("user");
  }
}
