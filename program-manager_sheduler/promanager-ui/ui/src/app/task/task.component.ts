import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskInterface, ProductInterface } from '../model/product';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})

export class TaskComponent implements OnInit {
  taskData = [];
  addTasks = this.fb.group({
    taskName: [''],
  });
  toggleInputBox = false;
  task: string;
  dataset$: ProductInterface;
  predefinedTask;
  teamDataset$;

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    public dialogRef: MatDialogRef<TaskInterface>,
    @Optional() @Inject(MAT_DIALOG_DATA) public productId: string
  ) { }

  ngOnInit() {
    console.log(this.productId);
    this.service.getProductTask(this.productId).subscribe((data: any) => {
      console.log('response', this.productId);
      this.dataset$ = data;
      console.log(this.dataset$);
      console.log(this.dataset$.predefinedTask);
    });
  }

  addTask(attr) {
    if (attr != null) {
      this.service.postTasks(this.productId, attr).subscribe((data: any) => {
        this.dataset$.predefinedTask = data.result.predefinedTask;
      });
      this.toggleInputBox = false;
      this.addTasks.reset();
    }
  }

  enableInputBox() {
    this.toggleInputBox = true;
  }

  deleteTask(taskId: string) {
    const index = taskId;
    this.service.deleteTasks(this.productId, taskId).subscribe((data: any) => {
      this.dataset$.predefinedTask = data.result.predefinedTask;
    });
  }

  Close(): void {
    this.dialogRef.close();
  }

}
