import { Injectable } from '@angular/core';
import { ProductDataInterface } from '../model/product-data-interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PriorityStoryInterface } from '../model/priority-story-interface';
import { EpicDataInterface } from '../model/epic-data.interface';


@Injectable({
  providedIn: 'root'
})
export class BacklogService {


  private productId;
  private productDataURL = 'http://localhost:8084/api/v1/products';
  private selectedEpic;
  private userStoryDetails;

  constructor(private http: HttpClient) {
    this.selectedEpic = new BehaviorSubject([]);
   }

   setSelectedEpic(selectedEpic: EpicDataInterface) {
      this.selectedEpic.next(selectedEpic);
   }
   getSelectedEpic() {
     return this.selectedEpic;
   }
   setProductId(productId: string) {
     this.productId = productId;
   }

   fetchDataAsBehaviour() {
     const productBacklogURL = `${this.productDataURL}/${this.productId}/backlogs`;
     return this.http.get<ProductDataInterface>(productBacklogURL);
   }
   addEpics(epicData): Observable<ProductDataInterface> {
      const epicDataURL = `${this.productDataURL}/${this.productId}/backlogs/epics`;
      return this.http.put<ProductDataInterface>(epicDataURL, epicData);
   }
   addToPriority(epicId: string, userStory: PriorityStoryInterface): Observable<EpicDataInterface> {
     const priorityStoryURL = `${this.productDataURL}/${this.productId}/backlogs/epics/${epicId}/priority`;
     console.log(priorityStoryURL);
     return this.http.put<EpicDataInterface>(priorityStoryURL, userStory);
  }
  deleteFromPriority(userStoryId: string, epicId: string): Observable<ProductDataInterface> {
    const userStoryURL = `${this.productDataURL}/${this.productId}/backlogs/epics/${epicId}/priority/${userStoryId}`;
    console.log(userStoryURL);
    return this.http.delete<ProductDataInterface>(userStoryURL);
  }
}
