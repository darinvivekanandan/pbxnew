import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Ring } from './ring';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()



export class RingService {

  constructor(private http: Http) { }
  getRings()
  {
    return this.http.get('http://localhost:3000/rings').pipe(
    map(res => res.json()));
  }
  addRing(newRing)
  {
    var headers = new Headers();
    headers.append('Content-Type','Application/Json');
    return this.http.post('http://localhost:3000/ring',newRing,{headers:headers}).pipe(
    map(res => res.json()));
  }
  
  deleteRing(id)
  {
    return this.http.delete('http://localhost:3000/ring/'+id).pipe(map(res => res.json()));
  }
  
  
  }
  