import { Component } from "@angular/core";
import {BaThemeSpinner} from "../../theme/services";

@Component({
    selector:'setting',
    styleUrls:['./setting.scss'],
    templateUrl:'./setting.html'
})
export class SettingComponent{
    constructor(private _spinner:BaThemeSpinner){
        this._spinner.hide();
    }
}