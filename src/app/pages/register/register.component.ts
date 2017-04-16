import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';

import 'style-loader!./register.scss';
import { RegisterService } from "./register.service";
import {User} from '../../model/user'
@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  private registerUser:User={id:"",email:"",password:"",name:"",firstName:"",lastName:"",status:-1};

  constructor(fb:FormBuilder, private registerService:RegisterService) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
       this.registerUser.name=this.name.value;
       this.registerUser.email=this.email.value;
       this.registerUser.password=this.password.value;
      //  this.registerService.registerUser(this.registerUser).then(re=>{
      //    if(re.status!=-0){
      //      return;
      //    }
      //    console.log("Register user successful");
      //  });

      this.registerService.registerUserObservable(this.registerUser).subscribe(re=>{
        console.log(re);
      })
    }
  }
}
