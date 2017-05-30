import { ProtractorExpectedConditions } from 'protractor/built/expectedConditions';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CompanyDTO} from '../../../model/account/companyDTO'
import { BaseService } from "../../common/services/baseService";


@Injectable()
export class CompanySettingService{
    
    constructor(protected companyHttp:Http, protected baseService:BaseService){}
    getCompanys():Observable<any[]>{
        return this.companyHttp.get(this.baseService.baseUrl+'/company/getCompanys').map(this.baseService.extractData).catch(this.baseService.handlerError);
    }

    addCompany(companyInfo:CompanyDTO){
        this.companyHttp.post(this.baseService.baseUrl+'/company/CreateCompany',JSON.stringify(companyInfo)).map(this.baseService.extractData).catch(this.baseService.handlerError);
    }
}