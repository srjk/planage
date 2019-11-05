import { Component, OnInit, enableProdMode, ViewChild, Input } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../services/product.service';
import { PersonService } from '../services/person.service';
import { UserService } from "../services/user.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-personal-calendar',
  templateUrl: './personal-calendar.component.html',
  styleUrls: ['./personal-calendar.component.sass']
})
export class PersonalCalendarComponent implements OnInit {

  currentDate: Date = new Date();
  schedulerDataSource: any = {};
  private isCookiePresent = false;
  colorsource = [{
    id: "1",
    color: "#0E680C"
  }];
  @Input() data;
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;

  constructor(
    private personService: PersonService,
    private userservice: UserService,
    private cookie: CookieService
  ) {
    console.log('************', this.data);
    this.schedulerDataSource = null;
    this.schedulerDataSource = this.personService.getTasks(this.data);
  }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.cookie.check('__scheduler'));
    console.log('************', this.data);
    this.schedulerDataSource = this.personService.getTasks(this.data);
  }

  onAppointmentFormOpening(data) {
    const form = data.form;

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
        readOnly: true,
      }
    }, {
      dataField: 'startDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        max: '10000',
        readOnly: true,
      }
    }, {
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {
        displayExpr: 'dd-mm-yyyy',
        width: '100%',
        type: 'datetime',
        readOnly: true,
      }
    }
    ]);
  }

}
