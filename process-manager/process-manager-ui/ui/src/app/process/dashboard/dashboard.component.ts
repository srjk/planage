import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Board, BoardState, BoardList } from 'proflo-process-lib/lib/types';
import { setCurrentOpenBoard } from 'proflo-process-lib/lib/actions';
import { BoardService } from 'src/app/services/board.service';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

interface User {
  _id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userProfile: string;
  boardList: Array<BoardList>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @select(state => state.boards) boards$: Observable<BoardState>;

  public boardList: Array<BoardList> = [];
  public userEmail: string;
  public userId: string;
  public userProfile: string;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<BoardState>,
    private spinner: NgxSpinnerService,
    private service: BoardService,
    private cookie: CookieService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit() {

    this.userEmail = this.storage.get('userInformation').userEmail;
    this.userId = this.storage.get('userInformation').userId;
    this.userProfile = this.storage.get('userInformation').userProfile;

    this.spinner.show();

    this.service.getUserDetails(this.userEmail).subscribe((result: User) => {
      if (result.boardList.length !== 0) {
        this.boardList = result.boardList;
      }
      setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.spinner.hide();
      }, 500);
    });
  }

  ngOnDestroy() { }

  // function to redirect to board component 
  onOpenBoard(board: Board) {

    this.spinner.show();

    // Retrieve the board from server by boardId.
    this.service.getBoard(board.boardId, this.userId).subscribe((result: Board) => {
      this.spinner.hide();
      if (result.length !== 0) {
        this.ngRedux.dispatch(setCurrentOpenBoard(result[0]));
        this.router.navigate(['/board', board.boardId]);
      } else {
        this.router.navigate(['/pagenotfound']);
      }
    })
  }

}

