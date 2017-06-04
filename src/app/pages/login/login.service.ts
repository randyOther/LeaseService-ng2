import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginUserDTO } from "../../model/account/loginDTO";
import { UserModel  } from "../../model/account/userModel";
import { BaseService } from "../common/services/baseService";
// import 'rxjs/add/observable/throw';
@Injectable()
export class LoginService{
     baseUrl="http://localhost:8080";
     constructor(private http:Http,private baseService:BaseService){
     }
     
     login(loginDTO:LoginUserDTO):Observable<UserModel>{
          let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
      let loginUrl=this.baseUrl+"/User/login"
      console.log(loginUrl);
       return this.http.post(loginUrl,JSON.stringify(loginDTO),options).map(this.baseService.extractData).catch(this.baseService.handlerError);
     }
  getUserData(id:string,name:string):Observable<any>{
    let getUserUr=this.baseUrl+"/User/GetParam/"+id+"/"+name;
    console.log(getUserUr);
    return this.http.get(getUserUr).map(this.baseService.extractData).catch(this.baseService.handlerError);
  }
}