import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskCalendarService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1/participant/';
  }

  setTaskStatus(participantId: string, tasks) {
    return this.http.post(this.baseUrl + participantId + '/tasks', tasks).subscribe();
  }
}
