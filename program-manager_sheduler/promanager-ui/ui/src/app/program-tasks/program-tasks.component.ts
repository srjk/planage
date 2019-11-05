import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskInterface } from '../model/product';
import { TaskService } from '../services/task.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-program-tasks',
  templateUrl: './program-tasks.component.html',
  styleUrls: ['./program-tasks.component.sass']
})

export class ProgramTasksComponent implements OnInit {
  serializedDate = new FormControl((new Date()).toISOString());
  myForm = this.fb.group({
    due_date: ['']
  });
  taskData = [];
  addTasks = new FormGroup({
    taskName: new FormControl(''),
    startDate: new FormControl(''),
  });
  toggleInputBox = false;
  task: string;
  dataset$;
  predefinedTask;
  teamDataset$;

  constructor(
    private fb: FormBuilder,
    private service: TaskService,
    private productService:ProductService,
    public dialogRef: MatDialogRef<TaskInterface>,
    @Optional() @Inject(MAT_DIALOG_DATA) public programId: string) { }

  ngOnInit() {
    this.service.getTask(this.programId).subscribe((data: any) => {
      console.log(data);
      this.dataset$ = data.result;
      console.log(data.result);
    });

  }

  addTaskFromPrograms(attr) {
    console.log(this.programId);
    console.log(attr);

    this.service.postProgramTasks(this.programId,attr).subscribe((data: any) => {
      this.service.getTask(this.programId).subscribe((data: any) => {
        console.log(data);
        this.dataset$ = data.result;
        console.log(data.result);
      });
      console.log(data);
    });
    this.toggleInputBox = false;
    this.addTasks.reset();
  }

  enableInputBox() {
    this.toggleInputBox = true;
  }

  deleteTask(productId: string, taskId: string) {
    const index = taskId;
    this.service.deleteTasks(productId, taskId).subscribe((data) => {
      this.dataset$.forEach((element) => {
        if (element.productId === productId) {
          element.task.splice(taskId, 1);
        }
      });
      console.log(taskId, data);
    });
  }

  Close(): void {
    this.dialogRef.close();
  }

  date(task, event) {
    task.dueDate = new Date(event.value._d);
    this.service.updateTasks(task).subscribe();

  }
}
