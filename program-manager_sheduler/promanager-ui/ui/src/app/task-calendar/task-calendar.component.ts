import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Assignee } from '../model/product';
import { DxSchedulerComponent } from 'devextreme-angular';
import { AssigneeCalendarService } from '../services/assignee-calendar.service';
import { AssigneeService } from '../services/assignee.service';
import { Participant, Task, TaskCalendar } from '../model/participant';
import { ParticipantService } from '../services/participant.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.sass']
})

export class TaskCalendarComponent implements OnInit {
  @Input() data;
  currentDate: Date = new Date();
  programName: string;
  schedulerDataSource: any = {};
  participantData: Participant;
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;
  userEmail: string;
  task: TaskCalendar[] = [];
  constructor(private participantService: ParticipantService, private Cookie: CookieService) {
    const token = this.Cookie.get('__scheduler');
    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;

    console.log('constructor call');

  }

  ngOnInit() {
    this.participantService.getParticipantTask(this.userEmail, 'true', this.data).subscribe(data => {
      this.participantData = data;
      console.log(data);
      console.log(this.participantData);
      this.participantData.tasks.forEach(task => {
        // tslint:disable-next-line: max-line-length
        const startDate: Date = new Date(new Date(task.dueDate).getFullYear(), new Date(task.dueDate).getMonth(), new Date(task.dueDate).getDate());
        console.log(startDate);
        const endDate = new Date(new Date(task.dueDate).getTime() - 24 * 60 * 1000 * 5);
        const program = { startDate, endDate, taskName: task.taskName, taskId: task.taskId, status: task.status };
        this.task.push(program);
        console.log(this.task);
      });
    });
    this.schedulerDataSource = this.task;
    console.log(this.schedulerDataSource);
  }

  onAppointmentFormOpening(data) {
    // tslint:disable-next-line: prefer-const
    let form = data.form;
    // tslint:disable-next-line: prefer-const
    let startDate = data.appointmentData.startDate;
    form.option('items', [{
      label: {
        text: 'Task name'
      },
      editorType: 'dxTextBox',
      dataField: 'text',
      editorOptions: {
        width: '100%',
        displayExpr: 'text',
        value: data.appointmentData.taskName,
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
        width: '100%',
        type: 'datetime',
        readOnly: true,
      }
    }
      , {
      label: {
        text: 'Complete'
      },
      dataField: 'status',
      editorType: 'dxCheckBox',
      editorOptions: {
        width: '100%',
        value: data.appointmentData.status,
        readOnly: true,
      }
    }
    ]);
  }

}
