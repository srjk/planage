import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { addClass } from '@syncfusion/ej2-base';
import { Status, Row, Board, Column, Group, BoardState, Subscriber } from 'proflo-process-lib/lib/types';
import {
  updateTask, deleteGroup, deleteColumn, addRow, deleteRow,
  addStatus, deleteStatus, updateStatus, moveRow, setGroupName,
  setColumnName, setGroupColor, assignTask, unassignTask
} from 'proflo-process-lib/lib/actions';
import { rowInitializer, statusInitializer } from 'src/app/initializer/type-initializer';
import { SocketCommunication } from 'src/app/socket/SocketCommunication';
import { Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit, OnDestroy {

  @select() boards$: Observable<BoardState>;
  @select() currentOpenBoard$: Observable<Board>;
  @select() boardGroups;
  @Input() groupId;
  @Input() groups;
  public socket;
  public group: Group;
  public displayedColumns: Column[] = [];
  public board: Board;
  public row: any;
  public boardList: Board[] = [];
  public anotherGroups: Group[] = [];
  public displayedGroups: Group[] = [];
  public label: string;
  public color: any;
  public labelList: Status[] = [];
  public userId: string;
  public boardSubscribers: Subscriber[];
  public groupColor: Group.groupColor;
  public toggle;
  // To specify number of columns to be rendered.
  public colCount = 4;

  // Triggers before rendering each palette tile.
  public customColors: { [key: string]: string[] } =
    { custom1: ['#e04567', '#399667', '#FFD24C', '#85D5FB', '#9373D9', '#999999', '#459CCB', '#FB7D4B'] };

  constructor(
    private ngRedux: NgRedux<BoardState>,
    private socketService: SocketCommunication,
    private toastr: ToastrManager,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) {
    this.socket = this.socketService.getSocket();
  }

  ngOnInit() {
    this.userId = this.storage.get('userInformation').userId;

    this.displayedGroups = this.groups;

    this.currentOpenBoard$.subscribe((result: Board) => {
      if (result) {
        this.board = result
        this.group = result.boardGroups.filter(tempGroup => tempGroup.groupId === this.groupId)[0];
        this.displayedColumns = this.board.boardColumns;
        this.labelList = this.board.boardStatusColumn;
        this.boardSubscribers = this.board.boardSubscribers;
        this.displayedGroups = this.board.boardGroups;
      }
    })
  }

  ngOnDestroy() { }

  // Method to add a row in group when input box losses it's focus
  onAddRow($event): void {
    if ($event.target.value !== '') {
      const newRow = rowInitializer(this.displayedColumns, $event.target.value);
      this.ngRedux.dispatch(addRow(this.board.boardId, this.groupId, newRow));
      this.socket.emit('@@proflo-types/ADD_ROW', { action: addRow(this.board.boardId, this.groupId, newRow), subscriberId: this.userId })
      $event.target.value = '';
    }
  }

  showSuccess(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
    this.toastr.successToastr(msg, 'Success!', {
      position,
      animate,
      toastTimeout
    });
  }

  showError() {
    this.toastr.errorToastr('This is error toast.', 'Oops!');
  }

  showWarning() {
    this.toastr.warningToastr('This is warning toast.', 'Alert!');
  }

  // Method to delete a row in group
  onDeleteRow(row: Row): void {
    this.ngRedux.dispatch(deleteRow(this.board.boardId, this.groupId, row.rowId));
    this.socket.emit('@@proflo-types/DELETE_ROW', { action: deleteRow(this.board.boardId, this.groupId, row.rowId), subscriberId: this.userId });
    this.showSuccess('Row has deleted successfully');
  }

  // Method to add a row in group when ENTER key has pressed
  onAddRowByEnter($event: any): void {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13) {
      if ($event.target.value !== '') {
        const newRow = rowInitializer(this.displayedColumns, $event.target.value);
        this.ngRedux.dispatch(addRow(this.board.boardId, this.groupId, newRow));
        this.socket.emit('@@proflo-types/ADD_ROW', { action: addRow(this.board.boardId, this.groupId, newRow), subscriberId: this.userId })
        $event.target.value = '';
      }
    }
  }

  // Method to change the value of a particular cell
  onUpdateRowValue(updatedRowId: string, updatedCellId: string, $event): void {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13 && $event.targer.value !== '') {
      this.ngRedux.dispatch(updateTask(this.board.boardId, this.groupId, updatedRowId, updatedCellId, $event.target.value))
      this.socket.emit('@@proflo-types/UPDATE_TASK', { action: updateTask(this.board.boardId, this.groupId, updatedRowId, updatedCellId, $event.target.value), subscriberId: this.userId })
    };
  }


  // Method to delete a column from a board
  onDeleteColumn(column: Column): void {
    this.ngRedux.dispatch(deleteColumn(this.board.boardId, column.columnId));
    this.socket.emit('@@proflo-types/DELETE_COLUMN', { action: deleteColumn(this.board.boardId, column.columnId), subscriberId: this.userId })
    this.showSuccess('Column has deleted successfully');
  }


  onDeleteGroup(board: Board, group: Group): void {
    this.ngRedux.dispatch(deleteGroup(board.boardId, group.groupId));
    this.ngRedux.dispatch(deleteGroup(board.boardId, group.groupId));
    this.socket.emit('@@proflo-types/DELETE_GROUP', { action: deleteGroup(board.boardId, group.groupId), subscriberId: this.userId })
    this.showSuccess('Group has deleted successfully');
  }


  //TODO for move row
  onMoveRow(group: Group, row: Row): void {
    this.ngRedux.dispatch(moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId))
    this.socket.emit('@@proflo-types/MOVE_ROW', { action: moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId), subscriberId: this.userId })
  }

  onChangeGroupName($event) {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13) {
      this.ngRedux.dispatch(setGroupName(this.board.boardId, this.groupId, $event.target.value));
      this.socket.emit('@@proflo-types/SET_GROUP_NAME', { action: setGroupName(this.board.boardId, this.groupId, $event.target.value), subscriberId: this.userId })
      if ($event.target.value == '') {
        this.toastr.infoToastr('Group name Should not be empty')
      }
      $event.target.value = '';
    }
  }


  onChangeGroupColor(color: string) {
    // const key = $event.key || $event.keyCode;
    // if (key === 'Enter' || key === 13) {
    if (color !== '') {
      this.ngRedux.dispatch(setGroupColor(this.board.boardId, this.groupId, color));
    }
  }

  onChangeColumnName(columnId: string, $event) {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13) {

      this.ngRedux.dispatch(setColumnName(this.board.boardId, columnId, $event.target.value));
      this.socket.emit('@@proflo-types/SET_COLUMN_NAME', { action: setColumnName(this.board.boardId, columnId, $event.target.value), subscriberId: this.userId })
      if ($event.target.value == '') {
        this.toastr.infoToastr('Column name should not be empty')
      }
      $event.target.value = '';
    }
  }

  // // ======================      Status column code    ===========================]

  public tileRender(args: PaletteTileEventArgs): void {
    addClass([args.element], ['e-icons', 'e-custom-tile']);
  }

  // Triggers while selecting colors from palette.
  public onChange(args: ColorPickerEventArgs): void {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    this.color = args.currentValue.hex;
  }

  createStatus() {
    if (this.label && this.color) {
      const newStatus = statusInitializer();
      newStatus.label = this.label;
      newStatus.color = this.color;
      this.ngRedux.dispatch(addStatus(this.board.boardId, newStatus));
      this.socket.emit('@@proflo-types/ADD_STATUS', { action: addStatus(this.board.boardId, newStatus), subscriberId: this.userId })
    }
  }

  deleteStatus(position: number) {
    this.ngRedux.dispatch(deleteStatus(this.board.boardId, position));
    this.socket.emit('@@proflo-types/DELETE_STATUS', { action: deleteStatus(this.board.boardId, position), subscriberId: this.userId })
  }

  onSaveData(rowId, cellId, label, color) {
    const status = statusInitializer();
    status.label = label;
    status.color = color;
    this.ngRedux.dispatch(updateStatus(this.board.boardId, this.groupId, rowId, cellId, status));
    this.socket.emit('@@proflo-types/UPDATE_STATUS', { action: updateStatus(this.board.boardId, this.groupId, rowId, cellId, status), subscriberId: this.userId })
  }

  onAssignTask(cellId, rowId, profileUrl) {
    this.ngRedux.dispatch(assignTask(this.board.boardId, this.groupId, rowId, cellId, profileUrl));
    this.socket.emit('@@proflo-types/ASSIGN_TASK', { action: assignTask(this.board.boardId, this.groupId, rowId, cellId, profileUrl), subscriberId: this.userId })
  }

  onUnassignTask(rowId, cellId) {
    this.ngRedux.dispatch(unassignTask(this.board.boardId, this.groupId, rowId, cellId))
    this.socket.emit('@@proflo-types/ASSIGN_TASK', { action: unassignTask(this.board.boardId, this.groupId, rowId, cellId), subscriberId: this.userId })
  }
}

