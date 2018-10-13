import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{ Router } from '@angular/router';
import {ChangeDetectorRef } from '@angular/core';
import{Restaurant} from './restaurant';
import { RestaurantService } from './restaurant.service';
import {WebsocketService} from '../websocket.service';
import {Event} from './event';

export interface DialogData {
  animal: "fewfwf";
  name: "fewfew";
}

@Component({
  templateUrl: 'addrestaurant.html',
  providers: [RestaurantService],
  styleUrls: ['./restaurant.component.scss'],

})
export class AddRestaurantComponent implements OnInit {

rests :Restaurant[]=[];
rest:Restaurant;
  name:any;
  cname:any;
  sname:any;
  pnumber:any;
  zip:any;
  city :any;
  country:any;
  cperson:any;
  cnumber:any;
  email:any;
  style:any;
  ioConnection:any;


  constructor(private router:Router,private restaurantservice:RestaurantService,private websocket : WebsocketService ){}
  ngOnInit()
  {
this.initIoConnection();

  }

  private initIoConnection(): void {
    this.websocket.initSocket();

    this.ioConnection = this.websocket.view('message')
      .subscribe((rest) => {
        this.rests.push(rest);
      });

    this.websocket.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.websocket.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
    }






 


  save(){

    const newrest={
      name:this.name,
      cname:this.cname,
      sname:this.sname,
      pnumber:this.pnumber,
      zip:this.zip,
      city :this.city,
      country:this.country,
      cperson:this.cperson,
      cnumber:this.cnumber,
      email:this.email,
      style:this.style
        }

    this.websocket.add('message',newrest);
  
    this.router.navigate(['restaurant/viewrestaurant']);
  
   
  }
  close()
  {
      this.router.navigate(['restaurant/viewrestaurant']);
  }
  

}