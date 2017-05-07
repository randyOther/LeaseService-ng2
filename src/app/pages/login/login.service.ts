import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {LoginDTO} from '../../model/account/loginDTO';
import { UserModel  } from "../../model/account/userModel";
// import 'rxjs/add/observable/throw';
@Injectable()
export class LoginService{
     baseUrl="http://localhost:8080";
     constructor(private http:Http){
     }
     login(loginDTO:LoginDTO):Observable<UserModel>{
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
      let loginUrl=this.baseUrl+"/User/login"
      console.log(loginUrl);
       return this.http.post(loginUrl,JSON.stringify(loginDTO),options).map(this.extractData).catch(this.handleError);
     }
     private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  getUserData(id:string,name:string):Observable<any>{
    let getUserUr=this.baseUrl+"/User/GetParam/"+id+"/"+name;
    console.log(getUserUr);
    return this.http.get(getUserUr).map(this.extractData).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }     
}