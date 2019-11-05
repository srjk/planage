import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserStoryInterface } from '../model/user-story-interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {
  userStoryData: any;
  rootURL = 'http://localhost:8084/api/v1';
  productId;
  setProductId(productId) {
    this.productId = productId;
  }

  constructor(private http: HttpClient) {
    this.userStoryData = new BehaviorSubject([]);
   }
   fetchUserStoryData(userStoryId) {
     const userStoryURL = `${this.rootURL}/userStories/${userStoryId}`;
     return this.http.get(userStoryURL);
  }
  addUserStory(userStory, epicId): Observable<UserStoryInterface> {
    console.log(epicId);
    const userStoryURL = `${this.rootURL}/products/${this.productId}/epics/${epicId}/userStories`;
    return this.http.post<UserStoryInterface>(userStoryURL, userStory);
  }
  getUserStoryData(epicId, page): Observable<UserStoryInterface[]> {
    const fetchNewStoryURL = `${this.rootURL}/products/${this.productId}/epics/${epicId}/userStories?page=${page}&limit=5`;
    return this.http.get<UserStoryInterface[]>(fetchNewStoryURL);
  }
  updateUserStory(userStory): Observable<UserStoryInterface> {
    const updateURL = `${this.rootURL}/userStories/${userStory.id}`;
    return this.http.put<UserStoryInterface>(updateURL, userStory);
  }
  getUserStoryOfProduct(): Observable<UserStoryInterface>{
    const fetchUrl = `${this.rootURL}/products/${this.productId}/userStories`;
    return this.http.get<UserStoryInterface>(fetchUrl);
  }
}
