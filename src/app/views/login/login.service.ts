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
    var params = new HttpParams();
    console.log('ogij',user);
    return this.http.get('http://localhost:3000/api/login', {params:user}  ).pipe(
  map(res => res.json()));
  }
}
