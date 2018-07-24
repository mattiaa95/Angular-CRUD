import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../clases/User';

@Injectable()
export class UserService {
  url="http://localhost:8080/users";
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    })
  };
  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.url, JSON.stringify(user), this.httpOptions);
  }

  deleteUser(user): Observable<any> {
    return this.http.request('delete',this.url,{body : user});
  }

  updateUser(user): Observable<any> {
    return this.http.request('put',this.url,{body : user});
  }


}
