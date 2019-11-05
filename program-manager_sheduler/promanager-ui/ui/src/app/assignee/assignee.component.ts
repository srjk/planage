import { Component, OnInit } from '@angular/core';
import { AssigneeService } from '../services/assignee.service';
import { Router } from '@angular/router';
import { Assignee } from '../model/product';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProgramTasksComponent } from '../program-tasks/program-tasks.component';
import { ReleaseTaskComponent } from '../release-task/release-task.component';
import { CookieService } from 'ngx-cookie-service';
import { SlackComponent } from '../slack/slack.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.sass']
})

export class AssigneeComponent implements OnInit {
  data1: any = [];
  userEmail: string;
  private isCookiePresent = false;

  constructor(
    private assigneeService: AssigneeService,
    private dialog: MatDialog,
    private router: Router,
    private userservice: UserService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.cookie.check('__scheduler'));
    const token = this.cookie.get('__scheduler');
    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
    console.log(this.userEmail);
    this.getAllData(this.userEmail);
  }

  onChange(event) {
    event.status = !event.status;
    console.log(event.status);
  }

  getAllData(userEmail: string): void {
    // let sortProductData: ProductInterface[];
    this.assigneeService.getData(userEmail).
      subscribe((data) => {
        this.data1.push(data);

      });
  }

  openCalender(data) {
    this.assigneeService.data = data;
    console.log('program call', data);
    this.router.navigateByUrl('/assigneecalendar');
  }

  addTasks(programId: string) {
    // this.router.navigateByUrl('/task');
    this.router.navigate(['/task', programId]);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '50%';
    // dialogConfig.height = '500px';
    // dialogConfig.data = programId;
    // this.dialog.open(ProgramTasksComponent, dialogConfig);
  }

  releaseTasks(programId: string) {
    this.router.navigate(['/releasetask',programId])
    //
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '50%';
    // dialogConfig.height = '500px';
    // dialogConfig.data = programId;
    // this.dialog.open(ReleaseTaskComponent, dialogConfig);
  }

  slack(programId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '5300px';
    dialogConfig.data = programId;
    this.dialog.open(SlackComponent, dialogConfig);
  }

}
