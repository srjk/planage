import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { SprintBoardInterface } from '../sprint-board-interface';
import { Observable } from 'rxjs';
import { ColumnInterface } from '../column-interface';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {
  sprintId: '1';


  constructor(private http: HttpClient) { }


  getDummyData(): Observable<SprintBoardInterface> {
    //  return this.http.get("http://localhost:3000/sprint");
    return this.http.get<SprintBoardInterface>(`http://localhost:8085/api/v1/products/1/sprint/1`);
  }

  addList(productId: string, sprintId: string, listName: any): Observable<any> {
    console.log('cons', listName);
    return this.http.patch<any>(`http://localhost:8085/api/v1/products/1/sprint/1/column`, listName);
  }

  deletecol(productId: string, sprintId: string, id: string): Observable<ColumnInterface[]> {
    // console.log("service id",columnId);
    return this.http.delete<any>(`http://localhost:8085/api/v1/products/${productId}/sprint/${sprintId}/column/${id}`);
  }
  //  getPreviousSprintId(sprintId){
  //    this.sprintId = sprintId
  //  }
  //  createNewSprint() {
  //    return this.http.post("http://localhost:8080/api/v1/products/product1/sprint/" );
  //  }

  //  updateCard() {
  //  return this.http.patch("http://localhost:8080/api/vi/
  // products/product1/sprint/week1/columns/{event.previousColumn.id}",+event.previousContainer.id)  
  //  }


}
