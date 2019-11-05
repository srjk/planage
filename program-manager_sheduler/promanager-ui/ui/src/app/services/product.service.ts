import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface, TaskInterface } from '../model/product';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl: string;
  public productInfo: ProductInterface[];
  public currentProductChange;
  formfilledData: ProductInterface;
  public calenderData: ProductInterface;

  constructor(private http: HttpClient) {
    this.currentProductChange = new BehaviorSubject([]);
    this.baseUrl = environment.baseUrl + '/api/v1';
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  // Adding Product
  addProduct(inputData: ProductInterface, email: string): Observable<ProductInterface> {
    console.log(inputData, email);
    return this.http.post<ProductInterface>(this.baseUrl + '/products/' + email, inputData).pipe(
      catchError(this.errorHandler)
    );
  }

  // For Updation Data -DialogBox
  sendToFormComponent(inputData: ProductInterface) {
    this.formfilledData = inputData;
    console.log(this.formfilledData);
  }

  getProducts(email: string) {
    return this.http.get<ProductInterface[]>(this.baseUrl + '/products/' + email)
      .subscribe((data) => {
        this.productInfo = data;
        this.currentProductChange.next(this.productInfo);
      },(error) =>{
        throw  new Error(error);
      });
  }

  getProductData(email: string) {
    return this.http.get<ProductInterface[]>(this.baseUrl + '/products/' + email).pipe(catchError(this.errorHandler));
  }

  getProductTask(productId: string): Observable<{}> {
    return this.http.get<ProductInterface[]>(this.baseUrl + '/product/' + productId).pipe(catchError(this.errorHandler));
  }

  getData() {
    return this.currentProductChange;
  }

  // deleting Data
  deleteProductData(productId: string): Observable<{}> {
    // const url = `${this.jsonUrl}/${productId}`;
    return this.http.delete(this.baseUrl + '/products/' + productId)
      .pipe(
        catchError(this.errorHandler),
        tap((data) => {
          let index;
          this.productInfo.map((obj: any, i) => {
            if (obj.id === productId) {
              index = i;
            }
            return obj;
          });
          if (index > -1) {
            this.productInfo.splice(index, 1);
          }
          this.currentProductChange.next(this.productInfo);
        })
      );
  }

  // update
  updateProductData(recievedData: ProductInterface, id: string, email: string): Observable<ProductInterface> {
    // const url = `${this.jsonUrl}/${id}`;
    // tslint:disable-next-line: max-line-length
    return this.http.put<ProductInterface>(this.baseUrl + '/products/' + email + '/' + id, recievedData)
      .pipe(catchError(this.errorHandler));

  }
  deleteTasks(productId: string, taskId: string): Observable<{}> {
    return this.http.delete<TaskInterface>(this.baseUrl + '/products/' + productId + '/tasks/' + taskId)
      .pipe(catchError(this.errorHandler));
  }

  postTasks(productId: string, task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.baseUrl + '/products/' + productId + '/predefinedtasks/', task)
      .pipe(catchError(this.errorHandler));
  }

}
