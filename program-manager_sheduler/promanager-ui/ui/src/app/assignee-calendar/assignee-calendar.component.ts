import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../services/product.service';
import { PersonService } from '../services/person.service';
import { AssigneeCalendarService } from '../services/assignee-calendar.service';
import { Assignee } from '../model/product';
import { AssigneeService } from '../services/assignee.service';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-assignee-calendar',
  templateUrl: './assignee-calendar.component.html',
  styleUrls: ['./assignee-calendar.component.sass']
})

export class AssigneeCalendarComponent implements OnInit {
  programData: Assignee;
  currentDate: Date = new Date();
  programName: string;
  colorsource=[{id: "1",
    color: "#0E680C"}];
  schedulerDataSource: any = {};
  private isCookiePresent = false;
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;

  constructor(private assigneeCalendarService: AssigneeCalendarService, private assigneeService: AssigneeService,
              private userservice: UserService,
              private cookie: CookieService) {
    this.schedulerDataSource = null;
    this.programData = this.assigneeService.sendDate();
    this.programName = this.programData.programName;
    this.schedulerDataSource = assigneeCalendarService.getTasks(this.programData.programId);
  }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.cookie.check('__scheduler'));
  }

  showAppointmentPopup(popup) {
    this.scheduler.instance.showAppointmentPopup(false);
  }

  onAppointmentFormOpening(data) {
    // tslint:disable-next-line: one-variable-per-declaration
    let // tslint:disable-next-line: prefer-const
      form = data.form,
      // tslint:disable-next-line: prefer-const
      startDate = data.appointmentData.startDate;
    form.option('items', [{
      label: {
        text: 'Session name'
      },
      editorType: 'dxTextBox',
      dataField: 'text',
      editorOptions: {
        width: '100%',
        displayExpr: 'text',
        value: data.appointmentData.text,
      }
    }, {
      dataField: 'startDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        max: '10000',

      }
    }, {
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
      }
    }
    ]);
  }
}
