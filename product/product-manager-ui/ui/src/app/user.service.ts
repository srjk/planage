import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './iuser';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Products} from "./IProducts";
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // private _url = 'http://localhost:4000/user';
  private _url = 'http://localhost:8084/api/v1/users';
  userEmail: string;

  getItems(): Observable<User> {
    return this.http.get<User>(this._url);
  }

  addProductToUser(product:Products, email:String): Observable<User>{
    const newurl = `${this._url}/${email}`;
    return this.http.post<User>(newurl,product);
  }

  getUserDetail(email:String): Observable<User>{
    const newurl = `${this._url}/${email}`;
    return this.http.get<User>(newurl);
  }

  // getProductOfUser(): Observable<UserProduct>{
  //   const newurl = `${this._url}/${this.userEmail}/product`;
  //   return this.http.get<UserProduct>(newurl);
  // }

  setUserEmail(userEmail){
    this.userEmail = userEmail;
  }

  getUserEmail():string{
    return this.userEmail;
  }

}
