import { Component } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
name: any;
password: any;
  constructor(private router:Router, private registerservice: RegisterService) { }

  save()
  {
  console.log(this.name,this.password); 
  const user = {
    name: this.name,
    password: this.password
  };
  this.registerservice.addUser(user)
  .subscribe(reg=>{
    console.log(reg);
   if(reg === 100) {
     console.log('Added');
     alert('Added Successfully');
    this.router.navigate(['/login']);
   }
  });
  console.log(user);
  }
}
