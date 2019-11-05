import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gantt } from './igantt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GanttService {
  productId: String;

  constructor(private http: HttpClient) { }
  private _url = 'http://localhost:8084/api/v1/productRoadMap';

  getItems(): Observable<Gantt> {
    return this.http.get<Gantt>(`http://localhost:8084/api/v1/productRoadMap/${this.productId}`);
  }

  setProductId(productId) {
    this.productId = productId;
  }
}
