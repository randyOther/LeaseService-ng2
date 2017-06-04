import { Component } from "@angular/core";
import {BaThemeSpinner} from "../../theme/services";

@Component({
    selector:'setting',
    template: `<router-outlet></router-outlet>`
})
export class SettingComponent{
    constructor(private _spinner:BaThemeSpinner){
        this._spinner.hide();
    }
}