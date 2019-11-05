import { Injectable, Inject } from '@angular/core';
import { Assignee } from '../model/product';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'

})
export class AssigneeService {
  data: Assignee;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1/employee/';
  }

  getData(userEmail: string): Observable<Assignee> {
    return this.http.get<Assignee>(this.baseUrl + userEmail).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  sendDate(): Assignee {
    return this.data;
  }
}
