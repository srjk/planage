import { Component, OnInit } from '@angular/core';
import { Service } from './services/calendar.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit {

  public isCookiePresent = false;

  constructor(private cookie: CookieService, private service: UserService) { }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.service.setUserAuthStatus(this.cookie.check('__scheduler'));
  }

}
