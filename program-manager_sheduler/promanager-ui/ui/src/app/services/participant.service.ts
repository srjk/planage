import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant, ParticipantList } from '../model/participant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1/participant/';
  }

  getParticipantDetail(userEmail: string, param, programId) {
    return this.http.get<ParticipantList>(this.baseUrl + userEmail + '/program/' + programId + '?calendar=' + param);
  }
  getParticipantTask(userEmail: string, param, programId) {
    return this.http.get<Participant>(this.baseUrl + userEmail + '/program/' + programId + '?calendar=' + param);
  }

  getParticipantPrograms(userEmail: string) {
    return this.http.get<Participant[]>(this.baseUrl + userEmail);
  }



}
