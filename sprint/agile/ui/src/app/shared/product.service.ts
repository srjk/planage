import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ProductInterface } from '../sprint-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private jsonUrl = 'http://localhost:8085';

  addProduct(inputData: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.jsonUrl + '/api/v1/product', inputData).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  getProducts() {
    return this.http.get<ProductInterface[]>(this.jsonUrl + '/api/v1/product').pipe(catchError(this.errorHandler));
  }

}
