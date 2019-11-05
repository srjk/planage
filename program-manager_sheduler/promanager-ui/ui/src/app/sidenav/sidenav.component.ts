import {Component, OnInit, enableProdMode, Inject} from '@angular/core';
import { ProductService } from '../services/product.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, shareReplay } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../services/user.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  title = 'program-manager';
  public userEmail: string;
  public userName: string;
  public userId: string;
  public userRole: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private productService: ProductService,
    private breakpointObserver: BreakpointObserver,
    private cookie: CookieService,
    private service: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {

    // Retrieve the token from cookie
    const token = this.cookie.get('__scheduler');

    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;

    this.service.getUserDetails(this.userEmail).subscribe(result => {
        console.log(result);
      // store the user information in session storage
        this.storage.set('userInformation', result);

      // set userEmail and userName
        this.userEmail = JSON.parse(JSON.stringify(result)).email;
        this.userName = JSON.parse(JSON.stringify(result)).text;
        this.userId = JSON.parse(JSON.stringify(result)).id;
        this.userRole = JSON.parse(JSON.stringify(result)).userRole;
        console.log(this.userRole, this.userEmail, this.userId, this.userName);
    });

  }

  openPersonalCalendar() {
    this.router.navigateByUrl('/personalcalendar');
  }
  openAssigneeCalendar() {
    this.router.navigateByUrl('/assigneecalendar');
  }

}
