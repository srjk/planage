import { Component, OnInit } from '@angular/core';

import {MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {ParticipantService} from '../services/participant.service';
import {Participant, ParticipantList, Task} from '../model/participant';
import {Router, ActivatedRoute} from '@angular/router';
import {TaskCalendarService} from '../services/task-calendar.service';
import {BehaviorSubject} from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-slectionlist',
  templateUrl: './slectionlist.component.html',
  styleUrls: ['./slectionlist.component.sass'],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }
  ]
})
export class SlectionlistComponent implements OnInit {
  participantData: ParticipantList;
  userEmail:string;
  programId: string;
  selected = 'list';
  selectedOption = 'task';
  calendar = false;
  task = true;
  public actionPrimary = 'list';
  public actionSecondary = 'task';
  public loadComponent = 'listtask';

  constructor(
    private participantService: ParticipantService,
    private router: Router,
    private taskService: TaskCalendarService,
    private activated: ActivatedRoute,private Cookie:CookieService) {
    const token = this.Cookie.get('__scheduler');
    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
    this.programId = this.activated.snapshot.params.id;
  }

  ngOnInit() {
    this.componentRendering();
    this.participantService.getParticipantDetail(this.userEmail,'false', this.programId).subscribe(data => {
      this.participantData = data;
      this.programId = data.programId;
      console.log(data);
    });

  }
  test(options) {
    console.log(options);
  }
  change(option) {
    console.log(option);
  }

  somethingClick(checkbox, item) {
    console.log(item);
    item.status = !item.status;
    this.taskService.setTaskStatus(this.participantData.id, item);
  }

  listOption() {
    this.actionPrimary = 'list';
    this.componentRendering();
  }
  taskOption() {
    console.log('task calling');
    this.actionSecondary = 'task';
    this.componentRendering();
  }
  calendarOption() {
    this.actionPrimary = 'calendar';
    this.componentRendering();
  }
  sessionOption() {
    this.actionSecondary = 'session';
    this.componentRendering();

  }


  someMethod(value) {
    console.log('************', value.value);
    this.actionPrimary = value;
    this.componentRendering();
  }
  someMethod1(value) {
    console.log('************', value.value);
    this.actionSecondary = value;
    this.componentRendering();
  }

  componentRendering() {
    console.log('component rendering ');
    console.log(this.actionSecondary);
    console.log(this.actionPrimary);
    if (this.actionPrimary === 'list' && this.actionSecondary === 'task') {
      console.log('&&&&&inside 1 if');
      this.loadComponent = 'listtask';
    } else if (this.actionPrimary === 'list' && this.actionSecondary === 'session') {
      console.log('&&&&&inside 2 if');
      this.loadComponent = 'listsession';
    } else if (this.actionPrimary === 'calendar' && this.actionSecondary === 'task') {
      console.log('&&&&&inside 3 if');
      this.loadComponent = 'calendartask';
    } else if (this.actionPrimary === 'calendar' && this.actionSecondary === 'session') {
      console.log('&&&&&inside 4 if');
      this.loadComponent = 'calendarsession';
    }
    console.log('&&&&&&&&&&&&', this.loadComponent);
  }

}
