import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserstoryPlanningService } from '../userstory-planning.service';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-tasks-planning',
  templateUrl: './tasks-planning.component.html',
  styleUrls: ['./tasks-planning.component.scss']
})
export class TasksPlanningComponent implements OnInit {
  taskData = [];
  userStoryId: string;

  addTasks = this.fb.group({
    taskName: [''],
    taskAssignedTo: [''],
    taskSize: [''],
    taskCategory: ['']
  });
  toggleInputBox = false;
  task: TaskInterface;
  dataset$;
  teamDataset$;

  constructor(private fb: FormBuilder, private service: UserstoryPlanningService) { }

  ngOnInit() {
    this.service.getData().subscribe((data: any) => {
      this.dataset$ = data.result;
    });
  }

  addTask(userstoryId, attr) {
    this.userStoryId = userstoryId;
    this.service.postTask(this.userStoryId, attr).subscribe((data: any) => {
      this.dataset$.forEach((element) => {
        if (element.userstoryId === userstoryId) {
          element.task.push(attr);
        }
      });
      console.log(data);
    });
    this.toggleInputBox = false;
    this.addTasks.reset();
  }

  enableInputBox() {
    this.toggleInputBox = true;
  }

  deleteTask(userstoryId: string, taskId: string) {
    const index = taskId;
    this.service.deleteTask(userstoryId, taskId).subscribe((data) => {
      this.dataset$.forEach((element) => {
        if (element.userstoryId === userstoryId) {
          element.task.splice(taskId, 1);
        }
      });
      console.log(taskId, data);
    });
  }

}
