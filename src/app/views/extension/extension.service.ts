import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Extension } from './extension';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()

export class ExtensionService {

  constructor(private http: Http) { }

//retrieve

getExtensions(userid)
{
  var params = new HttpParams();
  console.log(userid);
  var user = {
    userid: userid
  }
  return this.http.get('/extensions',{params:user}).pipe(
  map(res => res.json()));
}
addExtension(newExtension)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('/extension',newExtension,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteExtension(id,extension)
{
  return this.http.delete('/extension/'+id+'/'+extension).pipe(map(res => res.json()));
}t


}
