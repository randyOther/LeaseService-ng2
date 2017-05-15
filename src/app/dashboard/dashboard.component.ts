import {Component} from '@angular/core';
import {BaThemeSpinner} from '../theme/services'
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private _spinner:BaThemeSpinner) {
    this._spinner.hide();
  }

}
