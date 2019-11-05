import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SprintInterface } from './sprint-interface';
import { HttpHeaders } from '@angular/common/http';
import { TaskInterface } from './task-interface';
import { UserstoryInterface } from './userstory-interface';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoryPlanningService {
  public taskInfo: UserstoryInterface[];
  public currentTaskDelete;

  constructor(private http: HttpClient) {
    this.currentTaskDelete = new BehaviorSubject([]);

  }

  private url = 'http://localhost:8085/api/v1/products/1/sprints/1';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token', // 'Authorisation'
    })
  };

  getData() {
    return this.http.get<any>(this.url);
  }

  deleteTask(userstoryId: string, taskId: string) {
    const taskDeleteUrl = `${this.url}/userstories/${userstoryId}/tasks/${taskId}`;
    return this.http.delete<TaskInterface>(taskDeleteUrl, this.httpOptions);
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }


  postTask(userstoryId, task) {
    const taskPostUrl = `${this.url}/userstories/${userstoryId}/tasks`;
    return this.http.post(taskPostUrl, task);
  }

  deleteUserStory(userstoryId: string) {
    const userstoryDeleteUrl = `${this.url}/userstories/${userstoryId}`;
    return this.http.delete(userstoryDeleteUrl);
  }

}
