import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  private isUserAuthenticated = false;
  UserEmail: string;

  constructor(public http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1';
  }

  getUserAuthStatus() {
    return this.isUserAuthenticated;
  }

  setUserAuthStatus(status: boolean) {
    this.isUserAuthenticated = status;
  }

  getUserDetails(userEmail: string) {
    return this.http.get(this.baseUrl + '/users/' + userEmail);
  }

}
