import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()

export class ContactService {

  constructor(private http: Http) { }

//retrieve

getContacts(userid)
{
  var params = new HttpParams();
  var user = {
    userid: userid
  }
  return this.http.get('http://localhost:3000/contacts', {params:user}).pipe(
  map(res => res.json()));
}
addContact(newContact)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://localhost:3000/contact',newContact,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteContact(id)
{
  return this.http.delete('http://localhost:3000/contact/'+id).pipe(map(res => res.json()));
}


}
