import { Component, Input, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { Router } from '@angular/router';
import { TaskCalendarService } from '../services/task-calendar.service';
import { Rseponse, Task } from '../model/participant';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})

export class TaskListComponent implements OnInit {
  @Input() data;
  item: Task;
  taskData: Rseponse[];
  constructor(private participantService: ParticipantService, private router: Router, private taskService: TaskCalendarService) { }

  ngOnInit() {
    this.taskData = this.data.tasks;
  }

  onSelection(event) {
    console.log(event.option.value);
    this.item = event.option.value;
    this.item.status = !this.item.status;
    this.taskService.setTaskStatus(this.data.id, this.item);
  }

  getValue(selectedOptionLength, totalTasksLength) {
    return ((selectedOptionLength) / (totalTasksLength) * 100);
  }

}
