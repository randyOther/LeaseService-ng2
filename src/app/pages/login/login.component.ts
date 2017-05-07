import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router,NavigationExtras} from '@angular/router'
import 'style-loader!./login.scss';
import {BaThemeSpinner} from '../../theme/services'
import {AuthService} from '../../theme/services/authorize'
import {LoginService} from './login.service';
// import {LoginService} from '../../theme/services/account';
import {loginDTO} from '../../model/account/loginDTO';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public userInfo:loginDTO={userName:"",password:""};
  constructor(fb:FormBuilder,private loginService:LoginService, private authService:AuthService,public router:Router,private _spinner:BaThemeSpinner) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      //Pro env
      this.userInfo.userName=this.email.value;
      this.userInfo.password=this.password.value;
      this.loginService.login(this.userInfo).subscribe(re=>{
        console.log(re);
         this.authService.login().subscribe(()=>{
          if(this.authService.isLoggedIn){
            let redirect=this.authService.redirectUrl?this.authService.redirectUrl:'/pages/dashboard';
              let navigationExtras:NavigationExtras={
              preserveQueryParams:true,
              preserveFragment:true
            }
            this.router.navigate([redirect]);
            this._spinner.show();
          }
      });
    });
    }
  }
}
