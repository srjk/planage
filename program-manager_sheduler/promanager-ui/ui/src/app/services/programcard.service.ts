import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../model/participant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramcardService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1';
  }
  insertParticipant(object) {
    return this.http.post<Participant>(this.baseUrl + '/participant', object);
  }
  getProgramParticipant(programId: string) {
    return this.http.get<Participant[]>(this.baseUrl + '/program/' + programId + '/participant');
  }
}
