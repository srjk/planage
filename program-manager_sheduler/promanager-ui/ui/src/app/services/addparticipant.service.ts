import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddparticipantService {
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.baseUrl + '/api/v1';
  }
}
