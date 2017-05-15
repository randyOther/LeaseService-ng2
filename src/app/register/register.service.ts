import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {signUpDTO} from '../model/account/signUpDTO';
import {signUpModel} from '../model/account/signUpModel';
@Injectable()
export class RegisterService{
    // registerUrl="app/mock/MockUserDatas";
    baseUrl="http://localhost:8080";
    constructor(private http:Http){}

    registerUser(registerUser:signUpDTO):Promise<signUpModel>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl, { registerUser }, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
    }
         private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  registerUserObservable(SignUpInput:signUpDTO):Observable<signUpModel>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let registerUrl= this.baseUrl+"/User/SignUp";
    return this.http.post(registerUrl,JSON.stringify(SignUpInput),options).map(this.extractData).catch(this.handleError);
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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