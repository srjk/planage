import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { NgRedux, select } from "@angular-redux/store";
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { BoardState, Board } from "proflo-process-lib/lib/types";
import {
  addBoard,
  setCurrentOpenBoard,
  setBoardList
} from "proflo-process-lib/lib/actions";
import { BoardList } from "proflo-process-lib/lib/types";
import { CreateBoardDialogComponent } from "../create-board-dialog/create-board-dialog.component";
import {
  boardInitializer,
  subscriberInititalizer
} from "src/app/initializer/type-initializer";
import { BoardService } from "src/app/services/board.service";
import { WebStorageService, SESSION_STORAGE } from "angular-webstorage-service";
import { CookieService } from "ngx-cookie-service";
import { NgxSpinnerService } from "ngx-spinner";
import { SocketCommunication } from "src/app/socket/SocketCommunication";
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.sass"]
})
export class SidebarComponent implements OnInit, OnDestroy {
  @select() boards$: Observable<BoardState>;
  @select() currentOpenBoard$: Observable<Board>;
  public boards: BoardList;
  public userName: string;
  public userEmail: string;
  public userId: string;
  public userProfile: string;
  public socket;
  public isUserDetailsLoaded: boolean = false;
  public isCookiePresent: boolean = false;

  // Here isHandSet$ Observer will observe the current window screen size and show/hide the sidebar according to that
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ngRedux: NgRedux<BoardState>,
    private dialog: MatDialog,
    private router: Router,
    private service: BoardService,
    private cookie: CookieService,
    private spinner: NgxSpinnerService,
    private socketService: SocketCommunication,
    public toastr: ToastrManager,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) { }
  ngOnInit() {

    if (this.cookie.check('__planage_process')) {
      this.isCookiePresent = true;
    }

    this.socket = this.socketService.getSocket();
    this.spinner.show();

    // Retrieve the token from cookie
    const token = this.cookie.get("__planage_process");

    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;

    // call rest api to get the user details from server
    this.service.getUserDetails(this.userEmail).subscribe(result => {
      // store the user information in session storage
      this.storage.set("userInformation", result);

      // set userEmail and userName
      this.userEmail = JSON.parse(JSON.stringify(result)).userEmail;
      this.userName = JSON.parse(JSON.stringify(result)).userName;
      this.userId = JSON.parse(JSON.stringify(result)).userId;
      this.userProfile = JSON.parse(JSON.stringify(result)).userProfile;

      // dispatch an action to set the boardlist
      this.ngRedux.dispatch(
        setBoardList(JSON.parse(JSON.stringify(result)).boardList)
      );

      this.isUserDetailsLoaded = true;

      // load spinner for 2 seconds after data is completely loaded.
      setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.spinner.hide();
      }, 2000);
    });

    // subscribe to boardList so that any changes in boardList can be reflected here
    this.boards$.subscribe(result => {
      this.boards = result;
    });
  }

  ngOnDestroy() {
    //   this.currentOpenBoard$.unsubscribe();
    //   this.boards$.unsubscribe();
  }

  // create a board
  onCreateBoard(): void {
    const dialogRef = this.dialog.open(CreateBoardDialogComponent, {
      width: "400px"
    });

    // Get the board name from dialog input box
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        // initialize board details from boardInitializer
        const owner = subscriberInititalizer(
          this.userId,
          this.userName,
          this.userEmail,
          this.userProfile
        );
        const newBoard = boardInitializer(
          result,
          this.userEmail,
          this.userName,
          owner
        );

        this.spinner.show();
        this.socket.emit('@@proflo-types/ADD_BOARD', { action: addBoard(newBoard), subscriberId: this.userId },
          () => {
            setTimeout(() => {
              /** spinner ends after 2 seconds */
              this.spinner.hide();
            }, 1000);
            //dispatch an action to create an board
            this.ngRedux.dispatch(addBoard(newBoard));
            this.router.navigate(['/board', newBoard.boardId]);
          });
      }
    });
  }

  // call openBoard() whenever user click on any board from boardList.
  onOpenBoard(boardId) {
    this.spinner.show();

    // Retrieve the board from server by boardId.
    this.service.getBoard(boardId, this.userId).subscribe((result: Board) => {
      this.spinner.hide();
      if (result.length !== 0) {
        this.ngRedux.dispatch(setCurrentOpenBoard(result[0]));
        this.router.navigate(['/board', boardId]);
      }
    }, (error) => {
      this.router.navigate(['/pagenotfound']);
    })
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
}
