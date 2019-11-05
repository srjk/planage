import { Component, OnInit } from '@angular/core';
import { BoardService } from './services/board.service';
import { CookieService } from 'ngx-cookie-service';
import { SocketCommunication } from './socket/SocketCommunication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public isCookiePresent: boolean = false;
  private socket;

  constructor(
    private cookie: CookieService,
    private service: BoardService,
    private socketService: SocketCommunication
  ) {
    this.socket = this.socketService.getSocket();
  }

  ngOnInit(): void {

    if (this.cookie.check('__planage_process')) {
      this.isCookiePresent = true;
    }

    // set the user authentication status if cookie is valid, so that route guards can use it,
    this.service.setUserAuthStatus(this.cookie.check('__planage_process'));
  }
}
