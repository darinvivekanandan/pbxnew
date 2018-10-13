import { Injectable } from '@angular/core';
const SERVER_URL = 'http://localhost:3000';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import{Restaurant} from './restaurant/restaurant';
import {Event} from './restaurant/event';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

socket = socketIo(SERVER_URL);


public initSocket(): void {
    
  this.socket = socketIo(SERVER_URL);
}




public onEvent(event: Event): Observable<any> {
  return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
  });
}


  add(id:string,va:any)
  {
    this.socket.emit(id,va);
  }
  view(id:string):Observable<any>
  {

    return new Observable<any>(observer => {
      this.socket.on(id, (data: any) => observer.next(data));
      
  });

  }


  deleterestaurant(idm:string,id)
{
 
  this.socket.emit(idm,id);

 
 
  // return this.http.delete('http://localhost:3000/restaurant/'+id).pipe(map(res => res.json()));
}
}
