import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingService{
    baseUrl="";
    constructor(http:Http){

    }


    UpdateUserBaseSetting():Observable<any>{
        return Observable.of(true);
    }
}