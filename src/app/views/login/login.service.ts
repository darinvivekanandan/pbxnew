import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  
  login(user) {
    var headers = new Headers();
    headers.append('Content-Type','Application/Json');
    return this.http.post('http://localhost:3000/login',user,{headers:headers}).pipe(
  map(res => res.json()));
  }
}
