import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ivelocitychart } from '../velocitychart';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChartsService {
productId;
 // private url = 'http://localhost:8085/api/v1/products/1/velocitychart';
  constructor(private http: HttpClient) { }
  setProductId(productId: string) {
    this.productId =
    productId;
  }
  getProductId() {
      return this.productId;
  }
  getSprintData(productId: string): Observable<Ivelocitychart[]> {
    console.log('thi sis id in service', productId);
    const url = `http://localhost:8085/api/v1/products/${productId}/statistics`;
    return this.http.get<Ivelocitychart[]>(url).pipe(catchError(this.handleError));
   }

   private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side error', errorResponse.error.message);
    } else {
      console.error('server side error', errorResponse);
    }
    return throwError('some problem is occured here.............');
  }

}
