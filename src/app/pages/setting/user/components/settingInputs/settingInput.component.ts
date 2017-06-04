import { Component } from "@angular/core";
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";
import { EmailValidator,EqualPasswordsValidator } from "../../../../../theme/validators";
@Component({
    selector:'user-setting-inpiuts',
    templateUrl:'./settingInput.html'
})

export class UserSettingInputsComponent{
  public form:FormGroup;
  public orgName:AbstractControl;
  public email:AbstractControl;
  public phone:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;
  public submitted:boolean=false;
  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'orgName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'phone':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(11)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });
    this.orgName=this.form.controls['orgName'];
    this.email=this.form.controls['email'];
    this.phone=this.form.controls['phone'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }
  public onsubmit(values:Object):void{
    this.submitted=true;
    if(this.form.valid){

    }
  }
}