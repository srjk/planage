import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgRedux, select } from '@angular-redux/store';
import { IBoardState } from '../../../../node_modules/proflo-sprint-lib/lib/board-interface';
import { ProfloAgileActionTypes, moveCardWithinColumn, moveCardAcrossColumn } from '../../../../node_modules/proflo-sprint-lib/lib/action';
import { WebsocketService } from '../service/websocket.service';
import { KanbanService } from '../service/kanban.service';
import { sendDataToWebSocket } from '../socket-map';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {
  @select() columns;
  @Input() column;
  @Input() listOfColumnId;
  @Input() sprintId;
  @Output() triggerColumnDelete = new EventEmitter();
  constructor(private ngRedux: NgRedux<IBoardState>, private webSocketService: WebsocketService
    ,         private kanbanService: KanbanService) {

  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      sendDataToWebSocket(
        {
          type: ProfloAgileActionTypes.MOVE_CARD_WITHIN_COLUMN,
          payload: {
            columnId: event.container.id,
            previousTaskPosition: event.previousIndex,
            currentTaskPosition: event.currentIndex
          }
        }, this.webSocketService.getSocket(), this.kanbanService.getProductId());
      this.ngRedux.dispatch(moveCardWithinColumn(event.container.id, event.previousIndex, event.currentIndex));
    } else {
      console.log('Is last column',(event.container.id == this.listOfColumnId[this.listOfColumnId.length -1] ));
      sendDataToWebSocket({
        type: ProfloAgileActionTypes.MOVE_CARD_ACROSS_COLUMN, payload: {
          previousColumnId: event.previousContainer.id,
          currentColumnId: event.container.id,
          previousTaskPosition: event.previousIndex,
          currentTaskPosition: event.currentIndex,
          lastColumn: (event.container.id == this.listOfColumnId[this.listOfColumnId.length -1] )? true:false,
          sprintId: this.sprintId
        }
      }, this.webSocketService.getSocket(), this.kanbanService.getProductId());
      this.ngRedux.dispatch(moveCardAcrossColumn(event.previousIndex, event.currentIndex, event.previousContainer.id, event.container.id));
    }
  }
  deleteColumn() {
    this.triggerColumnDelete.emit(this.column);
  }
}
