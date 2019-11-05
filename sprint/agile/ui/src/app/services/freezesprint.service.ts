import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ifreezesprint } from '../freezesprint';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreezesprintService {

  private url = 'http://localhost:3000/sprint';
  constructor(private http: HttpClient) { }
  getList(): Observable<Ifreezesprint[]> {
    return this.http.get<Ifreezesprint[]>(this.url).pipe(catchError(this.handleError));
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
