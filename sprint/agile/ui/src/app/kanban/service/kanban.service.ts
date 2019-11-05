import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { NgRedux } from '@angular-redux/store';
import { IBoardState } from '../../../../node_modules/proflo-sprint-lib/lib/board-interface'; // will be imported from npm package soon :)
import {
  ProfloAgileActionTypes, moveColumns, moveCardWithinColumn,
  moveCardAcrossColumn, addColumns, deleteColumn, freezeBoard, unFreezeBoard
} from '../../../../node_modules/proflo-sprint-lib/lib/action';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  message;
  productId = '';
  private urlPrefix = 'http://localhost:8085/api/v1';
  constructor(private webSocketService: WebsocketService, private ngRedux: NgRedux<IBoardState>,
    private http: HttpClient) {
    this.message = webSocketService
      .connect()
      .map((response: any) => {
        // dispatch here
        console.log(response);
        if (response.payload !== undefined) {
          switch (response.type) {
            case ProfloAgileActionTypes.MOVE_COLUMN:
              this.ngRedux.dispatch(moveColumns(response.payload.currentColumnIndex, response.payload.previousColumnIndex));
              break;
            case ProfloAgileActionTypes.MOVE_CARD_WITHIN_COLUMN:
              this.ngRedux.dispatch(moveCardWithinColumn(response.payload.columnId, response.payload.previousTaskPosition,
                response.payload.currentTaskPosition));
              break;
            case ProfloAgileActionTypes.MOVE_CARD_ACROSS_COLUMN:
              this.ngRedux.dispatch(moveCardAcrossColumn(response.payload.previousTaskPosition, response.payload.currentTaskPosition,
                response.payload.previousColumnId, response.payload.currentColumnId));
              break;
            case ProfloAgileActionTypes.ADD_COLUMN:
              this.ngRedux.dispatch(addColumns(response.payload));
              break;
            case ProfloAgileActionTypes.DELETE_COLUMN:
              this.ngRedux.dispatch(deleteColumn(response.payload));
              break;
            case ProfloAgileActionTypes.FREEZE_BOARD:
              this.ngRedux.dispatch(freezeBoard())
              break;
            case ProfloAgileActionTypes.UNFREEZE_BOARD:
              this.ngRedux.dispatch(unFreezeBoard())
              break;
          }
        }
        return response;
      });
  }
  setProductId(productId) {
    this.productId = productId;
  }
  getProductId() {
    return this.productId;
  }
  sendMessage() {
    this.message.next(this.productId);
  }

  getKanbanData(): IBoardState {
    return this.http.get(`${this.urlPrefix}/products/${this.productId}/kanbanboard`);
  }
}
