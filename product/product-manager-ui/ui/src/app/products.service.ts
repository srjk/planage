import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './IProducts';
import { Team } from './IProducts';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { MailRequest } from './mail-request';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  private selectedProduct;
  constructor(private http: HttpClient) {
    this.selectedProduct = new BehaviorSubject([]);
  }
  // private _url = 'http://localhost:3000/products';
  private _url = 'http://localhost:8084/api/v1/products';
  productId: string;
  userEmail: string;

  getAllItems(): Observable<Products> {
    return this.http.get<Products>(this._url);
  }
  setSelectedProduct(selectedProduct: Products) {
    this.selectedProduct.next(selectedProduct);
  }
  getSelectedProduct() {
    return this.selectedProduct;
  }
  getItems(): Observable<Products> {
    return this.http.get<Products>(`${this._url}/${this.productId}`);
  }

  getProductById(Id: String): Observable<Products>{
    return this.http.get<Products>(`${this._url}/${Id}`);
  }

  addProduct(products: Products): Observable<Products> {
    return this.http.post<Products>(this._url, products);
  }

  deleteItem(memberId: String): Observable<{}> {
    const newurl = `${this._url}/${this.productId}/team/${memberId}`;
    return this.http.delete<Products>(newurl, this.httpOptions);

  }

  updateTeam(team: Team): Observable<Products> {
    const newurl = `${this._url}/${this.productId}/team`;
    return this.http.put<Products>(newurl, team, this.httpOptions);
  }

  getTeam(): Observable<Team> {
    const newurl = `${this._url}/${this.productId}/team`;
    return this.http.get<Team>(newurl);
  }

  sendEmail(mailRequest: MailRequest): Observable<MailRequest>{
    const emailurl = `${this._url}/${this.productId}/sendingEmail`;
    mailRequest.productId = this.productId;
    return this.http.post<MailRequest>(emailurl,mailRequest);
  }

  getProductOfUser(): Observable<Products>{
    const newurl = `${this._url}/user/${this.userEmail}`;
    return this.http.get<Products>(newurl);
  }

  setProductId(productId) {
    this.productId = productId;
  }

  setUserEmail(userEmail){
    this.userEmail = userEmail;
  }
}
