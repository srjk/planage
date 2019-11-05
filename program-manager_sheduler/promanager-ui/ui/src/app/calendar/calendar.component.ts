import { Component, ElementRef, enableProdMode, ViewChild } from '@angular/core';
import { Service } from '../services/calendar.service';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../services/product.service';
import { ProductInterface, Employee } from '../model/product';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  preserveWhitespaces: true
})

export class CalendarComponent {
  calenderData: ProductInterface;
  productName: string;
  resourcesDataSource: Employee[];
  employee: any = [];
  currentDate: Date = new Date();
  schedulerDataSource: any = {};
  durationWeek: number;
  private isCookiePresent = false;



  @ViewChild(DxSchedulerComponent, { static: false })
  scheduler: DxSchedulerComponent;
  colorsource=[{id: "1",
    color: "#0E680C"}];

  showAppointmentPopup() {
    this.scheduler.instance.showAppointmentPopup(false);
  }


  onAppointmentRendered(event) { }

  onAppointmentFormOpening(data) {
    console.log(data);
    const form = data.form;
    let startDate = data.appointmentData.startDate;

    const durationweek = this.durationWeek;

    form.option('items', [
      {
        label: {
          text: 'Program name'
        },
        editorType: 'dxTextBox',
        dataField: 'text',
        editorOptions: {
          width: '100%',
          displayExpr: 'text',
          value: data.appointmentData.text
        }
      },
      {
        label: {
          text: 'Agenda'
        },
        name: 'agenda',
        editorType: 'dxTextArea',
        editorOptions: {
          width: '100%',
          value: this.calenderData.agenda,
          readOnly: true
        }
      },
      {
        dataField: 'startDate',
        editorType: 'dxDateBox',
        editorOptions: {
          width: '100%',
          pickerType: 'rollers',
          displayExpr: 'dd/MM/yyyy',
          onValueChanged(args) {
            startDate = args.value;
            console.log(startDate);
            form
              .getEditor('endDate')
              .option(
                'value',
                new Date(
                  startDate.getTime() + 1000 * 60 * 60 * 24 * durationweek * 7
                )
              );
          }
        }
      },
      {
        name: 'endDate',
        dataField: 'endDate',
        editorType: 'dxDateBox',
        editorOptions: {
          width: '100%',
          type: 'date',
          readOnly: true
        }
      },
      {
        label: {
          text: 'Assignee'
        },

        dataField: 'assignee',
        editorType: 'dxTagBox',
        dataSource: 'resourcesDataSource',
        editorOptions: {
          allowMultiple: true,
          items: this.resourcesDataSource,
          displayExpr: 'text',

          valueExpr:
            'email',

          width: '100%',
          value: data.appointmentData.assignee,
          onValueChanged(args) {
            console.log(args.value);
          }
        }
      },
      {
        label: {
          text: 'Weeks'
        },
        name: 'weeks',
        editorType: 'dxTextArea',
        editorOptions: {
          width: '100%',
          value: this.calenderData.durationWeek,
          readOnly: true
        }
      },
      {
        label: {
          text: 'Day'
        },
        name: 'day',
        editorType: 'dxTextArea',
        editorOptions: {
          width: '50%',
          value: this.calenderData.durationDays,
          readOnly: true
        }
      },
      {
        label: {
          text: 'Hours'
        },
        name: 'hours',
        editorType: 'dxTextArea',
        editorOptions: {
          width: '50%',
          value: this.calenderData.durationHours,
          readOnly: true
        }
      },
      {
        label: {
          text: 'Color'
        },
        dataField: 'color',
        editorType: 'dxColorBox',
        editorOptions: {
          stylingMode: 'underlined',
          displayExpr: 'text',
          width: '100%',
          value: data.appointmentData.color,
        }
      }
    ]);
  }

  constructor(
    private service: Service,
    private productService: ProductService,
    private userservice: UserService,
    private cookie: CookieService
  ) {
    this.service.setId(this.productService.calenderData.id);
    this.schedulerDataSource = null;

    this.schedulerDataSource = service.getProgram();
    console.log(this.schedulerDataSource);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.cookie.check('__scheduler'));

    this.calenderData = this.productService.calenderData;
    console.log(this.calenderData.id);

    this.productName = this.calenderData.productName;
    this.resourcesDataSource = this.getAssignee();
    this.durationWeek = this.calenderData.durationWeek;

  }
  getAssignee(): any {
    this.service.getAssignee().subscribe(data => {
      data.forEach(element => {
        this.employee.push(element);
      });
    });
    return this.employee;
  }
}
