import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Isprint } from '../model/ISprint';

@Injectable({
  providedIn: 'root'
})
export class SprintDataService {

  private url = 'http://localhost:8085/api/v1/products/product1/sprint/week-1';
  constructor(private http: HttpClient) { }
  getList(): Observable<Isprint[]> {
    return this.http.get<Isprint[]>(this.url);
  }
}
