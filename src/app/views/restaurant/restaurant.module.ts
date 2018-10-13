import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AddRestaurantComponent} from './addrestaurant.component';
import {ViewRestaurantComponent} from './viewrestaurant.component'
import { HttpModule } from '@angular/http';
import {MatFormFieldModule,MatInputModule,MatCardModule,MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';


// Angular


const routes = [
  {
      path     : '',
    
  children: [
    {
      path: 'addrestaurant',
      component: AddRestaurantComponent,
      data: {
        title: 'AddRestaurant'
      }
    },
  
    {
      path: 'viewrestaurant',
      component: ViewRestaurantComponent,
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
    HttpModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule

  ],
  declarations: [
    AddRestaurantComponent,
    ViewRestaurantComponent
   
  ],
  entryComponents: [AddRestaurantComponent,ViewRestaurantComponent],

  exports:[

    AddRestaurantComponent,
    ViewRestaurantComponent,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule

  ],
  bootstrap: [AddRestaurantComponent,ViewRestaurantComponent]
})
export class RestaurantModule { }
