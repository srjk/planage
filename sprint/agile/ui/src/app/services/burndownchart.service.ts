import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { Iburndownchart } from '../IBurnDownChart';
import { ILeaderBoard } from '../ILeaderBoard';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BurndownchartService {

  private sprintId: string;
  // private _url = "http://localhost:8085/api/v1/products/1/sprints/1/burndownchart";
 //  private _url1 = "http://localhost:8085/api/v1/products/1/sprints/1/leaderboard";

  constructor(private http: HttpClient) { }
  setSprintId(sprintId) {
    this.sprintId= sprintId;
  }
  getSprintId() {
    return this.sprintId;
  }
  getChartData(productId: string): Observable<Iburndownchart[]> {
    console.log('This is Spring id**************', this.sprintId);
    const url = `http://localhost:8085/api/v1/products/${productId}/statistics?sprintId=${this.sprintId}`;
    console.log(url);
    return this.http.get<Iburndownchart[]>(url).pipe(catchError(this.handleError));
  }

 getLeaderBoardData(productId: string): Observable<ILeaderBoard[]> {
  console.log('thi sis id in leaderBoard===', productId);
  const url1 = `http://localhost:8085/api/v1/products/${productId}/statistics`;
  return this.http.get<ILeaderBoard[]>(url1).pipe(catchError(this.handleError));
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
