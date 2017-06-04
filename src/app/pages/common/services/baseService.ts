import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService{
    baseUrl:'http://localhost:8080/';
    constructor(public baseHttp:Http){
    }

    /**
     * Serialization data which came from Server
     */
    public extractData(res:Response){
        let body=res.json();
        return body || {};
    }
    /**
     * Handler the error
     */
    public handlerError(error: Response | any) {
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