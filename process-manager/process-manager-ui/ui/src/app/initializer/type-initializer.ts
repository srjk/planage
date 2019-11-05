import { Board, Group, Row, Cell, Subscriber, Column, Status, BoardMetadata } from 'proflo-process-lib/lib/types';
import { v4 as uuid } from 'uuid';

export function boardInitializer(boardName: string, userEmail: string, userName: string, subscriber: Subscriber) {
  const board: Board = {};

  board.boardId = uuid();
  board.boardName = boardName;
  board.boardDescription = '';
  board.boardOwner = userName;
  board.boardOwnerEmail = userEmail;
  board.createdAt = new Date();
  board.slackWebhookUrl = '';
  board.boardColumns = [
    taskColumnInitializer(), personColumnInitializer(), oneTimeColumnInitializer(), oneTimeColumnInitializer(), 
    oneTimeColumnInitializer(), oneTimeColumnInitializer(), oneTimeColumnInitializer()
  ];
  board.boardStatusColumn = [];
  board.boardMetadata = boardMetadataInitializer();
  board.boardGroups = [groupInitializer()];
  board.boardSubscribers = [subscriber];

  return board;
}

export function duplicateBoardInitializer(board: Board, name: string, userEmail: string, userName: string, subscriber: Subscriber): Board {
  const duplicateBoard: Board = {};
  duplicateBoard.boardId = uuid();
  duplicateBoard.boardName = name;
  duplicateBoard.boardDescription = '';
  duplicateBoard.boardOwner = userName;
  duplicateBoard.boardOwnerEmail = userEmail;
  duplicateBoard.createdAt = new Date();
  duplicateBoard.slackWebhookUrl = '';
  duplicateBoard.boardStatusColumn = [];
  duplicateBoard.boardMetadata = boardMetadataInitializer();
  duplicateBoard.boardGroups = [groupInitializer()];
  duplicateBoard.boardSubscribers = [subscriber];

  duplicateBoard.boardColumns = board.boardColumns;
  return duplicateBoard;

}

export function groupInitializer(rowArray?: Row) {
  const group: Group = {};
  group.groupId = uuid();
  group.groupName = 'New Group';
  group.groupColor = '#ed0cef';
  group.groupPosition = 0;
  if (rowArray) {
    group.groupRows = rowArray;
  } else {
    group.groupRows = [];
  }
  return group;
}


export function rowInitializer(columns: Column[], name: string) {
  const row: Row = {};
  row.rowId = uuid();
  row.rowPosition = 0;
  row.rowCells = [];
  columns.forEach((column: Column) => {
    const cell = cellInitializer();
    cell.columnId = column.columnId;
    row.rowCells.push(cell);
  });
  row.rowCells[0].cellType = 'text';
  row.rowCells[0].cellValue = name;
  row.rowCells[1].cellType = 'text'
  row.rowCells[1].cellValue = ''
  return row;
}

function cellInitializer() {
  const cell: Cell = {};
  cell.cellId = uuid();
  cell.cellType = 'status';
  cell.cellValue = statusInitializer();
  return cell;
}

export function subscriberInititalizer(userId: string, userName: string, userEmail: string, userProfile: string) {
  const subscriber: Subscriber = {};
  subscriber.subscriberId = userId;
  subscriber.subscriberName = userName;
  subscriber.subscriberEmail = userEmail;
  subscriber.subscriberProfile = userProfile;
  subscriber.subscriberStatus = 'online';
  subscriber.isBoardOwner = true;
  return subscriber;
}

export function columnInitializer(board: Board): any {
  const column: Column = {};
  column.columnId = uuid();
  column.columnName = 'Status';
  column.columnType = 'status';

  const cellList: Cell[] = [];

  board.boardGroups.forEach((tempGroup: Group) => {
    tempGroup.groupRows.forEach((tempRow: Row) => {
      const cell: Cell = {};
      cell.cellId = uuid();
      cell.cellType = 'status';
      cell.cellValue = statusInitializer();
      cell.columnId = column.columnId;
      cellList.push(cell);
    });
  });

  return { newColumn: column, cellArray: cellList };
}

function oneTimeColumnInitializer() {
  const column: Column = {};
  column.columnId = uuid();
  column.columnName = 'Status';
  column.columnType = 'status';
  return column;
}

function taskColumnInitializer() {
  const column: Column = {};
  column.columnId = uuid();
  column.columnName = 'Task Name';
  column.columnType = 'text';
  return column;
}

function personColumnInitializer() {
  const column: Column = {};
  column.columnId = uuid();
  column.columnName = 'Person';
  column.columnType = 'text';
  return column;
}

function boardMetadataInitializer() {
  const metadata: BoardMetadata = {};
  metadata.totalNumberOfRows = 0;
  metadata.totalNumberOfGroups = 1;
  metadata.totalNumberOfColumns = 7;
  metadata.createdDuplicateGroups = 0;
  return metadata;
}

export function statusInitializer() {
  const status: Status = {};
  status.label = '';
  status.color = '#FFFFFF';
  return status;
}
