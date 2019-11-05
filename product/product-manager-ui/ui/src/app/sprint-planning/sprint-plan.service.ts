import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SprintInterface } from './sprint-interface';
import { Observable } from 'rxjs';
import { PriorityStoryInterface } from '../model/priority-story-interface';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class SprintPlanService {

  private productId: string;
  private urlPrefix = 'http://localhost:8084/api/v1';
  private recievedData;
  sockClient = null;

  constructor(private http: HttpClient) { }

  public setProductId(productId: string): void {
    this.productId = productId;
  }
  public getProductId() {
    return this.productId;
  }
  disconnect() {
    this.sockClient.disconnect();
  }
  establishWebSocketConnection() {
    const ws = new SockJS(this.urlPrefix);
    this.sockClient = Stomp.over(ws);
    const that = this;
    this.sockClient.connect({}, (frame) => {
      that.sockClient.subscribe(`/board/${this.productId}`, (recievedEvent) => {
        this.recievedData = JSON.parse(recievedEvent.body);
      });
    });
  }
  resetRecievedData() {
    this.recievedData = undefined;
  }
  getSockClient() {
    return this.sockClient;
  }
  getRecievedData() {
    return this.recievedData;
  }
  getAllSprints(page): Observable<SprintInterface[]> {
    const sprintDataURL = `${this.urlPrefix}/products/${this.productId}/sprints?page=${page}&limit=5`;
    return this.http.get<SprintInterface[]>(sprintDataURL);
  }
  addSprint(newSprint: SprintInterface) {
    const sprintDataURL = `${this.urlPrefix}/products/${this.productId}/sprints`;
    return this.http.post<SprintInterface>(sprintDataURL, newSprint);
  }
  addUserStories(result: PriorityStoryInterface[], sprintId: string): Observable<SprintInterface> {
    const sprintDataURL = `${this.urlPrefix}/sprints/${sprintId}`;
    return this.http.post<SprintInterface>(sprintDataURL, result);
  }
  updateSprint(sprint: SprintInterface): Observable<SprintInterface> {
    const sprintDataURL = `${this.urlPrefix}/sprints/${sprint.sprintId}`;
    return this.http.put<SprintInterface>(sprintDataURL, sprint);
  }
}
