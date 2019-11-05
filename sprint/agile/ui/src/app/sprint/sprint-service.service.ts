import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TaskInterface } from '../task-interface';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {

  productId;
  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8085/api/v1/products';

  // setting the productId
  setProduct(productId: string) {
    this.productId = productId;
  }
  // geting the productId
  getProductId() {
    return this.productId;
  }

  // getting the data for the sprints
  getData() {
    const sprinturl = `${this.url}/${this.productId}/sprints`;
    return this.http.get(sprinturl).pipe(catchError(this.errorHandler));
  }
  // posting userstories
  postUserStories(userstory, sprintId) {
    console.log(sprintId);
    const userstoryUrl = `${this.url}/${this.productId}/sprints/${sprintId}/userstories`;
    return this.http.post(userstoryUrl, userstory).pipe(catchError(this.errorHandler));
  }
// selected userstories
  postUserSelectedStories(userstory, sprintId) {
    console.log(sprintId);
    const userstoryUrl = `${this.url}/${this.productId}/sprints/${sprintId}/selectedUserstories`;
    return this.http.post(userstoryUrl, userstory).pipe(catchError(this.errorHandler));
  }
// selected userstories
  getUserSelectedStoryData(sprintId) {
    const sprinturl = `${this.url}/${this.productId}/sprints/${sprintId}/selectedUserstories`;
    return this.http.get(sprinturl).pipe(catchError(this.errorHandler));

  }

  // getting the data for the selected userstory
  getUserStoryData(sprintId) {
    const sprinturl = `${this.url}/${this.productId}/sprints/${sprintId}/userstories`;
    return this.http.get(sprinturl).pipe(catchError(this.errorHandler));

  }

  // Post request for the task in a particular sprint
  postTask(userstoryId, task, sprintId) {
    const userstoryurl = `${this.url}/${this.productId}/sprints/${sprintId}/userstories/${userstoryId}/tasks`;
    return this.http.post(userstoryurl, task).pipe(catchError(this.errorHandler));
  }

  // Delete request for the task in particular sprint
  // deleteTask(userstoryId: string, taskId: string,sprintId) {
  //   const taskDeleteUrl = `${this.url}/${this.productId}/sprints/${sprintId}/userstories/${userstoryId}/tasks/${taskId}`;
  //   return this.http.delete<TaskInterface>(taskDeleteUrl).pipe(catchError(this.errorHandler));
  // }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

}
