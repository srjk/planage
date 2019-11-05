import { Injectable } from '@angular/core';
import { TaskInterface } from '../model/product';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  baseUrl: string;
  public taskInfo: TaskInterface[];

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1';
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  getTask(programId: string): Observable<{}> {
    console.log(programId);
    return this.http.get<TaskInterface[]>(this.baseUrl + '/tasks/' + programId);
  }

  updateTasks(task: TaskInterface) {
    return this.http.put(this.baseUrl + '/tasks/' + task.taskId, task);
  }

  releaseTask(taskList: TaskInterface[], programId: string): Observable<{}> {
    console.log(taskList);
    // tslint:disable-next-line: max-line-length
    console.log(programId);
    return this.http.put(this.baseUrl + '/tasks/' + programId + '/releasetasks', taskList);
  }
  postProgramTasks(productId: string, task): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.baseUrl + '/tasks/' + productId, task);
  }

  postTasks(productId: string, task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.baseUrl + '/products/' + productId + '/predefinedtasks/', task)
      .pipe(catchError(this.errorHandler));
  }

  deleteTasks(productId: string, taskId: string): Observable<{}> {
    return this.http.delete<TaskInterface>(this.baseUrl + '/products/' + productId + '/tasks/' + taskId)
      .pipe(catchError(this.errorHandler));
  }
}
