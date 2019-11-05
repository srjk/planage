import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintServiceService } from '../sprint-service.service';
import { FormBuilder } from '@angular/forms';
import { TaskInterface } from 'src/app/task-interface';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.scss']
})
export class UserstoryListComponent implements OnInit {
  data;
  selectedUserStoryData;
  @Output() addTaskInUserstory = new EventEmitter();
  userStoryView;
  productId;

  // New ONe
  taskData = [];
  userStoryId: string;
  options: string[] = ['Nitisha', 'Apurva', 'Tina', 'Riya'];

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
  tasks: TaskInterface[];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private sprintService: SprintServiceService) { }

  ngOnInit() {
    this.productId = this.sprintService.getProductId();
    console.log(this.selectedUserStoryData);
    this.userStoryView = false;
    this.sprintService.getUserStoryData(this.route.snapshot.params.id).subscribe(data => {
      this.selectedUserStoryData = data;
      console.log(this.selectedUserStoryData.result);
      this.selectedUserStoryData = this.selectedUserStoryData.result;
      this.selectedUserStoryData.forEach(element => {
        this.tasks = element.task;
      });
      console.log(this.tasks);
      console.log(this.selectedUserStoryData)
    });
  }
  // addTask(userStoryData) {
  //   this.data = userStoryData;
  //   console.log(userStoryData);
  //   this.userStoryView = true;
  // }

  // taskAdded(data) {
  //   console.log(data);
  //   this.userStoryView = false;

  // }


  // New One



  addTask(userstoryId, attr) {
    attr.userstoryId = userstoryId
    let userStory = this.selectedUserStoryData.find((story) => story.userstoryId === userstoryId);
    attr.userstoryName= userStory.userstoryName;
    console.log(attr);
    this.userStoryId = userstoryId;
    console.log(this.userStoryId);
    this.sprintService.postTask(this.userStoryId, attr, this.route.snapshot.params.id).subscribe((data: any) => {
      this.selectedUserStoryData.forEach((element) => {
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

  // deleteTask(userstoryId: string, taskId: string) {
  //   const index = taskId;
  //   //   let counter = 0;
  //   //   this.sprintService.deleteTask(userstoryId, taskId).subscribe((data) => {
  //   //     this.selectedUserStoryData.every((element) => {
  //   //      console.log(element);
  //   //       counter++;
  //   //     });
  //   //     this.selectedUserStoryData.splice(counter, 1);
  //   //     console.log(taskId, data);
  //   //   });
  //   // }
  //   this.sprintService.deleteTask(userstoryId, taskId).subscribe((data) => {
  //     this.selectedUserStoryData.forEach((element) => {
  //       if (element.userstoryId === userstoryId) {
  //         element.task.splice(taskId, 1);
  //       }
  //     });
  //     console.log(taskId, data);
  //   });
  // }

  start() {
    // hit an api which will post this.selectedUserStoryData.result in exchange
    this.router.navigate([`products/${this.productId}/currentsprint`]);

  }

}
