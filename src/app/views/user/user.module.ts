import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {AddUserComponent, AddUser} from './adduser.component';
import {ViewUserComponent} from './viewuser.component';
import {MatFormFieldModule,MatInputModule} from '@angular/material';

// Angular


const routes = [
  {
      path     : '',
    
  children: [
    {
      path: 'adduser',
      component: AddUserComponent,
      data: {
        title: 'AddUser'
      }
    },
  
    {
      path: 'viewuser',
      component: ViewUserComponent,
      data: {
        title: 'View User'
      }
    }
    
  
]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule

  ],
  declarations: [
    AddUserComponent,
    AddUser,
    UserComponent,
    ViewUserComponent
   
  ],
  entryComponents: [UserComponent,AddUserComponent, AddUser,ViewUserComponent],

  exports:[

    UserComponent,
    AddUser,
    AddUserComponent,
    ViewUserComponent,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [AddUserComponent,AddUser,ViewUserComponent]
})
export class UserModule { }
