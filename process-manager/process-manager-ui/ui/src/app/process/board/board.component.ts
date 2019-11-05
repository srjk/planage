import { Component, OnInit, Inject, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay, startWith } from "rxjs/operators";
import { NgRedux, select } from "@angular-redux/store";
import { ActivatedRoute, Router } from "@angular/router";
import { Board, BoardState, Row, Subscriber, Group } from "proflo-process-lib/lib/types";
import {
  addBoard, setBoardName, deleteBoard, setBoardDescription, addRow, addGroup,
  addColumn, setCurrentOpenBoard, deleteRow, deleteColumn, deleteGroup, setGroupName, setGroupColor,
  addStatus, updateTask, setColumnName, deleteStatus, updateStatus, assignTask, unassignTask, removeSubscriber, subscriberStatus
} from "proflo-process-lib/lib/actions";
import {
  groupInitializer, columnInitializer, duplicateBoardInitializer, rowInitializer, subscriberInititalizer
} from "src/app/initializer/type-initializer";
import { WebStorageService, SESSION_STORAGE } from "angular-webstorage-service";
import { NgxSpinnerService } from "ngx-spinner";
import { BoardService } from "src/app/services/board.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ImportFromExcelDialogComponent } from "../import-from-excel-dialog/import-from-excel-dialog.component";
import { SocketCommunication } from "src/app/socket/SocketCommunication";
import { SlackDialogComponent } from "../slack-dialog/slack-dialog.component";
import { ToastrManager } from 'ng6-toastr-notifications';
import { CookieService } from 'ngx-cookie-service';

interface UsersData {
  userId: string;
  userName: string;
  userEmail: string;
}

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.sass"]
})
export class BoardComponent implements OnInit, OnDestroy {

  // ngRedux store board observable
  @select(state => state.currentOpenBoard) currentBoard$: Observable<Board>;

  public board: Board; // This variable subscribes board$ to reflect any changes in redux store
  public routeId: string;
  public userEmail: string;
  public userName: string;
  public userId: string;
  public userProfile: string;
  public applicationUsers: UsersData[];
  public keyword = "name";
  public suggestedUser: any;
  public subscriberEmail: any;
  public currentBoardId: string;
  public boardSubscribers: Subscriber[];
  public allGroups: Group[];
  public socket;
  public myControl = new FormControl();
  public deletedBoardId: string;
  filteredOptions: Observable<UsersData[]>;

  emailGroup = this.formBuilder.group({
    emailValue: [
      "",
      [
        Validators.required,
        Validators.email,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(
          '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        )
      ]
    ]
  });
  // This function will observe the current window screen and show/hide the invite member button according to that
  isInviteMemberLink$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Tablet, Breakpoints.Web])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  @ViewChild('boardName', { static: false }) nameField: ElementRef;

  focusMethod(): void {
    this.nameField.nativeElement.focus();
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private ngRedux: NgRedux<BoardState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private service: BoardService,
    private spinner: NgxSpinnerService,
    private socketService: SocketCommunication,
    public toastr: ToastrManager,
    public cookie: CookieService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit() {
    this.socket = this.socketService.getSocket();

    this.socket.on("@@proflo-types/SET_BOARD_NAME", action => {
      this.socket.emit('change_board_name', { userId: this.userId, boardId: action.payload.boardId, boardName: action.payload.boardName }, () => {
        this.ngRedux.dispatch(
          setBoardName(action.payload.boardId, action.payload.boardName)
        );
      })
    });

    this.socket.on("@@proflo-types/DELETE_BOARD", action => {
      this.socket.emit('delete_board', { userId: this.userId, boardId: action.payload.boardId }, () => {
        this.router.navigate(['/dashboard'])
        this.toastr.warningToastr('This board is deleted')
      })
    });

    this.socket.on("@@proflo-types/SET_BOARD_DESCRIPTION", action => {
      this.ngRedux.dispatch(
        setBoardDescription(
          action.payload.boardId,
          action.payload.boardDescription
        )
      );
    });

    this.socket.on("@@proflo-types/DELETE_COLUMN", action => {
      this.ngRedux.dispatch(
        deleteColumn(action.payload.boardId, action.payload.boardColumnId)
      );
    });

    this.socket.on("@@proflo-types/ADD_COLUMN", action => {
      this.ngRedux.dispatch(
        addColumn(action.payload.boardId, action.payload.columnData)
      );
    });


    this.socket.on("@@proflo-types/SET_COLUMN_NAME", action => {
      this.ngRedux.dispatch(
        setColumnName(
          action.payload.boardId,
          action.payload.boardColumnId,
          action.payload.columnName
        )
      );
    });

    this.socket.on("@@proflo-types/ADD_ROW", action => {
      this.ngRedux.dispatch(
        addRow(
          action.payload.boardId,
          action.payload.groupId,
          action.payload.row
        )
      );
    });

    this.socket.on("@@proflo-types/DELETE_ROW", action => {
      this.ngRedux.dispatch(
        deleteRow(
          action.payload.boardId,
          action.payload.groupId,
          action.payload.rowId
        )
      );
    });

    this.socket.on("@@proflo-types/UPDATE_TASK", action => {
      this.ngRedux.dispatch(
        updateTask(
          action.payload.boardId,
          action.payload.groupId,
          action.payload.rowId,
          action.payload.cellId,
          action.payload.name
        )
      );
    });

    this.socket.on('@@proflo-types/UPDATE_STATUS', (action) => {
      this.ngRedux.dispatch(updateStatus(action.payload.boardId, action.payload.groupId,
        action.payload.rowId, action.payload.cellId, action.payload.status))
    })

    this.socket.on('@@proflo-types/ADD_GROUP', (action) => {
      let s = action.payload.group.groupName;
      s = s.substring(0, (s.indexOf("(") - 1))
      action.payload.group.groupName = s;
      this.ngRedux.dispatch(addGroup(action.payload.boardId, action.payload.group))
    })

    this.socket.on('@@proflo-types/DELETE_GROUP', (action) => {
      this.ngRedux.dispatch(deleteGroup(action.payload.boardId, action.payload.groupId))
    })

    this.socket.on('@@proflo-types/SET_GROUP_NAME', (action) => {
      this.ngRedux.dispatch(setGroupName(action.payload.boardId, action.payload.groupId, action.payload.groupName))
    })

    this.socket.on('@@proflo-types/SET_GROUP_COLOR', (action) => {
      this.ngRedux.dispatch(setGroupColor(action.payload.boardId, action.payload.groupId, action.payload.groupColor))
    })

    this.socket.on('@@proflo-types/ADD_STATUS', (action) => {
      this.ngRedux.dispatch(addStatus(action.payload.boardId, action.payload.status))
    })

    this.socket.on('@@proflo-types/DELETE_STATUS', (action) => {
      this.ngRedux.dispatch(deleteStatus(action.payload.boardId, action.payload.position))
    })

    this.socket.on('@@proflo-types/ASSIGN_TASK', (action) => {
      this.ngRedux.dispatch(assignTask(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId, action.payload.profileUrl))
    })

    this.socket.on('@@proflo-types/UNASSIGN_TASK', (action) => {
      this.ngRedux.dispatch(unassignTask(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId))
    })

    this.socket.on('@@proflo-types/REMOVE_SUBSCRIBER', (action) => {
      if (action.payload.subscriberId == this.userId) {
        this.socket.emit('deleteBoard', { boardId: action.payload.boardId, subscriberId: action.payload.subscriberId }, () => {
          this.ngRedux.dispatch(deleteBoard(action.payload.boardId))
          this.router.navigate(['/dashboard'])
        })
      } else {
        this.ngRedux.dispatch(removeSubscriber(action.payload.boardId, action.payload.subscriberId))
      }
    })

    this.socket.on('offline_subscriber', (user) => {
      this.ngRedux.dispatch(subscriberStatus(this.board.boardId, user.userId, 'offline'));
    })

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.userEmail = this.storage.get('userInformation').userEmail;
    this.userName = this.storage.get('userInformation').userName;
    this.userId = this.storage.get('userInformation').userId;
    this.userProfile = this.storage.get('userInformation').userProfile;

    this.activatedRoute.paramMap.subscribe((resultMap) => {
      this.currentBoardId = resultMap.get('id')

      this.socket.emit('subscribe', { room: this.currentBoardId });

      this.service.getBoard(this.currentBoardId, this.userId).subscribe((result: Board) => {
        if (result) {
          this.ngRedux.dispatch(setCurrentOpenBoard(result));
          this.boardSubscribers = result.boardSubscribers;
          this.allGroups = result.boardGroups;
        } else {
          this.router.navigate(['/pagenotfound']);
        }
      }, (error) => {
        this.router.navigate(['/pagenotfound'])
      })
    })

    this.currentBoard$.subscribe((result: Board) => {
      if (result) {
        this.board = result;
        this.boardSubscribers = result.boardSubscribers
        this.allGroups = result.boardGroups;
      }
    });

  }

  ngOnDestroy() {
    this.socket.emit('unsubscribe', { room: this.deletedBoardId, userId: this.userId });
  }

  private _filter(value?: string): UsersData[] {
    if (value) {
      return this.applicationUsers.filter(option => option.userEmail.toLowerCase().includes(option.userEmail));
    }
  }

  onBoardNameChange(board, $event) {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13) {
      this.ngRedux.dispatch(setBoardName(board.boardId, $event.target.value));
      this.socket.emit('@@proflo-types/SET_BOARD_NAME', { action: setBoardName(board.boardId, $event.target.value), subscriberId: this.userId });
      if ($event.target.value == '') {
        this.toastr.infoToastr('Board name should not be empty')
      }
    }
  }

  onBoardDescriptionChange(board: Board, $event: any) {
    const key = $event.key || $event.keyCode;
    if (key === 'Enter' || key === 13) {
      if ($event.target.value !== '') {
        this.ngRedux.dispatch(setBoardDescription(board.boardId, $event.target.value));
        this.socket.emit('@@proflo-types/SET_BOARD_DESCRIPTION', { action: setBoardDescription(board.boardId, $event.target.value), subscriberId: this.userId });
      }
    }
  }

  onDeleteBoard() {
    this.deletedBoardId = this.board.boardId;
    // this.ngRedux.dispatch(deleteBoard(this.board.boardId));
    this.spinner.show();
    this.socket.emit('@@proflo-types/DELETE_BOARD', { action: deleteBoard(this.deletedBoardId), subscriberId: this.userId },
      () => {
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        }, 1000);
        this.ngRedux.dispatch(deleteBoard(this.board.boardId));
        this.router.navigate(['dashboard']);
      })
  }

  onAddGroup() {
    const newGroup = groupInitializer();
    this.ngRedux.dispatch(addGroup(this.board.boardId, newGroup));
    this.socket.emit('@@proflo-types/ADD_GROUP', { action: addGroup(this.board.boardId, newGroup), subscriberId: this.userId });
  }

  onAddStatusColumn() {
    const newData = columnInitializer(this.board)
    this.ngRedux.dispatch(addColumn(this.board.boardId, newData));
    this.socket.emit('@@proflo-types/ADD_COLUMN', { action: addColumn(this.board.boardId, newData), subscriberId: this.userId })
  }

  onDuplicateBoard() {

    const owner = subscriberInititalizer(this.userId, this.userName, this.userEmail, this.userProfile)
    const duplicateBoard = duplicateBoardInitializer(this.board, 'copy of ' + this.board.boardName, this.userEmail, this.userName, owner);
    this.ngRedux.dispatch(addBoard(duplicateBoard));
    this.socket.emit('@@proflo-types/ADD_BOARD', { action: addBoard(duplicateBoard), subscriberId: this.userId },
      () => {
        // redirect to board component
        this.router.navigate(['/board', duplicateBoard.boardId]);
      });
  }

  onImportOpen(): void {
    const dialogRef = this.dialog.open(ImportFromExcelDialogComponent, {
      width: "500px",
      height: "400px"
    });

    // Get the board name from dialog input box
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        const value = result.split("\n");
        const rowArray: Row = [];
        let row: Row;
        value.forEach((s: string) => {
          row = rowInitializer(this.board.boardColumns, s);
          rowArray.push(row);
        });
        const newGroup = groupInitializer(rowArray);
        this.ngRedux.dispatch(addGroup(this.board.boardId, newGroup));
        this.socket.emit('@@proflo-types/ADD_GROUP', { action: addGroup(this.board.boardId, newGroup), subscriberId: this.userId });
      }
    });
  }

  onLoadApplicationUsers() {
    this.spinner.show("invite", {
      fullScreen: false,
      type: "ball-scale-multiple",
      size: "medium"
    });
    this.service.getAllUsers().subscribe((result: any) => {
      this.applicationUsers = result;
      // load spinner for 2 seconds after data is completely loaded.
      setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.spinner.hide("invite");
      }, 1000);
    });
  }

  onSendEmail() {
    const receiverEmail = this.applicationUsers.filter(
      result => result.userEmail === this.subscriberEmail
    )[0];
    let emailDetails = {};
    if (receiverEmail) {
      emailDetails = {
        to: receiverEmail.userEmail,
        from: this.userEmail,
        subscriberId: receiverEmail.userId,
        senderName: this.userName,
        boardId: this.board.boardId
      };
    } else {
      emailDetails = {
        to: this.subscriberEmail,
        from: this.userEmail,
        subscriberId: null,
        senderName: this.userName,
        boardId: this.board.boardId
      };
    }
    this.service.sendEmail(emailDetails).subscribe(result => {
    });
    this.showSuccess('Email has been sent successfully');
  }

  showSuccess(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
    this.toastr.successToastr(msg, 'Success!', {
      position,
      animate,
      toastTimeout
    });
  }

  showError(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
    this.toastr.successToastr(msg, 'Error!', {
      position,
      animate,
      toastTimeout
    });
  }

  showInfo(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
    this.toastr.successToastr(msg, 'Information!', {
      position,
      animate,
      toastTimeout
    });
  }

  showWarning(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
    this.toastr.warningToastr(msg, 'Alert!', {
      position,
      animate,
      toastTimeout
    });
  }

  onSlackEnable(): void {
    const dialogRef = this.dialog.open(SlackDialogComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.socket.emit('add_slack_webhook', { url: result, boardId: this.board.boardId }, () => {
          this.toastr.successToastr('Slack Webhook url is added successfully.')
        })
      }
    });
  }

  onRemoveSubscriber(subscriber: Subscriber) {
    this.ngRedux.dispatch(removeSubscriber(this.board.boardId, subscriber.subscriberId));
    // tslint:disable-next-line:max-line-length
    this.socket.emit('@@proflo-types/REMOVE_SUBSCRIBER', { action: removeSubscriber(this.board.boardId, subscriber.subscriberId), subscriberId: this.userId });
  }

  onLogout() {
    this.cookie.delete('__planage_process');
    this.router.navigate(['/logout'])
  }
}

