import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private isUserAuthenticated: boolean = false;

  private url: string = "http://localhost:8080/api/v1";

  constructor(public http: HttpClient) { }

  getUserAuthStatus() {
    return this.isUserAuthenticated;
  }

  setUserAuthStatus(status: boolean) {
    this.isUserAuthenticated = status;
  }

  public getUserDetails(email: string) {
    return this.http.get(`${this.url}/users/${email}/details`);
  }

  public getBoard(boardId: string, userId: string) {
    return this.http.get(`${this.url}/users/${userId}/boards/${boardId}`)
  }

  public getAllUsers() {
    return this.http.get(`${this.url}/users`);
  }

  public sendEmail(emailDetails) {
    return this.http.post(`${this.url}/users/email`, emailDetails);
  }

}
