import { Injectable } from '@angular/core';
import{Restaurant} from './restaurant';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Headers,HttpModule} from '@angular/http';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Event} from './event';
import{WebsocketService} from '../websocket.service';
const SERVER_URL = 'http://localhost:3000';




@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private socket;


  constructor(private http:Http,private websocket:WebsocketService) { }





  public addRestaurant(newrestaurant)
  {/*
    var headers = new Headers();
    headers.append('Content-Type','Application/Json');
    return this.http.post('http://localhost:3000/restaurant',newrestaurant,{headers:headers}).pipe(
    map(res => res.json()));
  
  */
this.websocket.add('message',newrestaurant)



  }




  public getrestaurant():Observable<any>
{

//this.websocket.view('message');
  return new Observable<any>(observer => {
    this.socket.on('message', (data: any) => observer.next(data));
});
/*
  return this.http.get('http://localhost:3000/restaurant').pipe(
    map(res => res.json()));
*/
  }

}
