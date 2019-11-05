import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IColumn } from '../../../../node_modules/proflo-sprint-lib/lib/column-interface';
import { NgRedux, select } from '@angular-redux/store';
import { IBoardState } from '../../../../node_modules/proflo-sprint-lib/lib/board-interface'; // will be imported from npm package soon :)
import { ProfloAgileActionTypes, moveColumns, addColumns, deleteColumn, initializeState, freezeBoard, unFreezeBoard } from 'node_modules/proflo-sprint-lib/lib/action';
import { KanbanService } from '../service/kanban.service';
import { WebsocketService } from '../service/websocket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sendDataToWebSocket } from '../socket-map';
import uuid from '../../../../node_modules/uuid';
import {BurndownchartService} from '../../services/burndownchart.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit, OnDestroy {

  @ViewChild('columnName', { static: false }) columnName: ElementRef;
  @select() columns;
  @select() status;
  showPlanASprintFirst= true;
  sprintName;
  nameOfColumn = '';
  showKanBanBoard = true
  listOfColumnId: string[] = [];
  showInputBox = false;
  listOfColumns = [];
  column: any;
  sprintId;

  constructor(private ngRedux: NgRedux<IBoardState>, private kanbanService: KanbanService,
    private webSocketService: WebsocketService, private route: ActivatedRoute,
    private router: Router, private burndownService: BurndownchartService) {
  }

  ngOnInit() {
    this.kanbanService.getKanbanData().subscribe((data: IBoardState) => {
      this.sprintId = data.result.sprintId;
      this.burndownService.setSprintId(this.sprintId);
      console.log(data);
      if(data.result.sprintId === null) {
        this.router.navigate(['../no-active'], {relativeTo: this.route});
      } else {

      }
      if (data.error === 'false') {
        this.listOfColumns = data.result.columns;
        this.sprintName = data.result.sprintName;
        this.ngRedux.dispatch(initializeState(data.result.id, data.result.sprintId, data.result.productId, data.result.productName, data.result.sprintName, data.result.columns, data.result.status));
        this.kanbanService.sendMessage();
      } else {
        this.router.navigate(['not-found']);
      }
      this.columns.subscribe(recievedData => {
        console.log(JSON.parse(JSON.stringify(recievedData)));
        if (recievedData.length !== 0) {

          this.column = JSON.parse(JSON.stringify(recievedData));
          this.listOfColumnId= [];
          recievedData.forEach((iteratedColunmns) => {
            this.listOfColumnId.push(iteratedColunmns.columnId);
          });
          console.log(this.listOfColumnId);
        }
      });
      this.status.subscribe(data => {
        if (data) {
          if (data === 'live') {
            this.showKanBanBoard = true;
          } else {
            this.showKanBanBoard = false
          }
        } else {
          this.showKanBanBoard = false;
        }
      })
      this.kanbanService.message.subscribe();
    });
  }
  ngOnDestroy() {
    this.webSocketService.getSocket().emit('disconnect');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousIndex !== event.currentIndex) {
      const packet = {
        type: ProfloAgileActionTypes.MOVE_COLUMN,
        payload: {
          currentColumnIndex: event.currentIndex,
          previousColumnIndex: event.previousIndex
        }
      };
      sendDataToWebSocket(packet, this.webSocketService.getSocket(), this.kanbanService.getProductId());
      this.ngRedux.dispatch(moveColumns(event.currentIndex, event.previousIndex));
    }
  }
  tranformToInputBox() {
    this.showInputBox = true;
    setTimeout(() => {
      this.columnName.nativeElement.focus();
    }, 0);
  }
  addColumn() {
    if (this.nameOfColumn !== '') {
      const addedColumn: IColumn = {
        columnId: '' + uuid.v4(),
        columnName: this.nameOfColumn,
        tasks: []
      };
      console.log(addedColumn);
      sendDataToWebSocket({
        type: ProfloAgileActionTypes.ADD_COLUMN,
        payload: { column: addedColumn }
      }, this.webSocketService.getSocket(), this.kanbanService.getProductId());
      this.ngRedux.dispatch(addColumns(addedColumn));
    }
    this.nameOfColumn = '';
    this.showInputBox = false;
  }
  freezeSprint() {
    sendDataToWebSocket({
      type: ProfloAgileActionTypes.FREEZE_BOARD,
      payload: {}
    }, this.webSocketService.getSocket(), this.kanbanService.getProductId())
    this.ngRedux.dispatch(freezeBoard());
  }
  triggerColumnDelete(columnToBeDeleted) {
    const indexOfColumn = this.column.indexOf(columnToBeDeleted);
    sendDataToWebSocket({
      type: ProfloAgileActionTypes.DELETE_COLUMN,
      payload: { columnIndex: indexOfColumn }
    }, this.webSocketService.getSocket(), this.kanbanService.getProductId());
    this.ngRedux.dispatch(deleteColumn(indexOfColumn));
  }
  unFreezeSprint() {
    sendDataToWebSocket({
      type: ProfloAgileActionTypes.UNFREEZE_BOARD,
      payload: {}
    }, this.webSocketService.getSocket(), this.kanbanService.getProductId())
    this.ngRedux.dispatch(unFreezeBoard());
  }
}
