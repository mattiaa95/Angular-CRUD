import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../clases/User';

@Injectable()
export class UserService {
  url="http://localhost:8080/users";
  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  addUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json'
      })
    };
    return this.http.post(this.url, JSON.stringify(user), httpOptions);
  }

  // deleteUser(user: User): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 
  //       'Access-Control-Allow-Origin':'*',
  //       'Content-Type':'application/json'
  //     })
  //   };
  //   return this.http.delete();
  // }


}
