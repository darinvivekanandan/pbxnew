import { Component, OnInit,Inject,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{ Router } from '@angular/router';
import {ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Restaurant} from './restaurant';
import { RestaurantService } from './restaurant.service';
import {MatSort,MatTableDataSource} from '@angular/material';
import { Alert } from 'selenium-webdriver';
import {Event} from './event';
import {WebsocketService} from '../websocket.service';



export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'view-restaurant',
  templateUrl: './viewrestaurant.component.html',
  styleUrls: ['./viewrestaurant.component.scss'],
  providers: [RestaurantService]


})
export class ViewRestaurantComponent implements OnInit {
  displayedColumns: string[] = ['name','cname','sname','pnumber','zip','city','country','cperson','cnumber','email','style','action'];
  dataSource;


  rests:Restaurant[];
  rest2:Restaurant;
  rest:Restaurant;
  names:any;
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
  interval: any;
  ioConnection:any;



  constructor(public dialog: MatDialog,private websocket:WebsocketService) { }

  private initIoConnection(): void {
    this.websocket.initSocket();
    this.websocket.view('message')
      .subscribe((rest : Restaurant) => {
         this.rest2=rest
       
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


  ngOnInit() {
    /*
    this.restaurantservice.getrestaurant()
  .subscribe(rests => this.rests = rests);

  this.restaurantservice.getrestaurant()
  .subscribe(rests => this.dataSource=new MatTableDataSource(rests));
  */
 this.initIoConnection();


  }


deleterestaurant(id:any)
{
  
  
  this.websocket.deleterestaurant('del',id);
  

  
  /*
  if(confirm("Are you sure"))
  {
  var rests=this.rests;
  this.restaurantservice.deleterestaurant(id).subscribe(data =>{

    if(data.n==1)
    {
      for(var i=0;i<rests.length;i++)
      {
        if(rests[i]._id==id)
        {
          rests.splice(i,1);
        }
      }
    }
    this.dataSource=new MatTableDataSource(rests);
  })
}
}
*/
}
}