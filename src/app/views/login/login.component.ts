import { Component } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthService1 } from './auth.service1';
import { LoginService } from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  username:any;
  password:any;


  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService,
    private auth1: AuthService1,
    private loginservice: LoginService) {
    this.form = fb.group({
      email: this.username,
      password:this.password
    });
  }

check()
{
  /*
  if (this.username=="1" && this.password=="1") {
    this.auth.sendToken(this.username)
    this.myRoute.navigate(["extension"]);
  }
  if (this.username=="2" && this.password=="2") {
    this.auth1.sendToken(this.username)
    this.myRoute.navigate(["user"]);
  }
  */
 const login = {
   name: this.username,
   password: this.password

 }
 console.log(login);
 this.loginservice.login(login).subscribe(user =>{
   if(user.user === null) {
     console.log('invalid');
   }
   else {
     console.log(user.user);
     this.auth.sendToken(user.user.name);
     this.auth.sendId(user.user._id);
     console.log(this.auth.getId());
     this.myRoute.navigate(['extension']);
   }
 })
}

}
