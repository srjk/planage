import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-planning',
  templateUrl: './task-planning.component.html',
  styleUrls: ['./task-planning.component.scss']
})
export class TaskPlanningComponent implements OnInit {

  @Input() data;
  @Output() outputEmit = new EventEmitter();
  private tasks = [];
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router.snapshot.paramMap.get(data));
    console.log(this.data);
  }

  userStoryAddTask(task) {
    console.log(task);
  }

  addTask() {
    // console.log("clicked on button")
    this.outputEmit.emit('this.tasks');
  }
}
