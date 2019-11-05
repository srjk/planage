import { Component, OnInit, Inject, Optional } from '@angular/core';
import { TaskService } from '../services/task.service';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskInterface } from '../model/product';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-release-task',
  templateUrl: './release-task.component.html',
  styleUrls: ['./release-task.component.sass']
})
export class ReleaseTaskComponent implements OnInit {
  // selected = false;
  dataset$: TaskInterface[];
  taskList: any = [];
  list:TaskInterface[]=[];
  checked = false;
  item: TaskInterface;
programId:string;
  constructor(
    private service: TaskService,
    public activateRoute :ActivatedRoute,

  ) { }

  ngOnInit() {
    this.programId=this.activateRoute.snapshot.params.id;
    this.service.getTask(this.programId).subscribe((data: any) => {
      data.result.forEach(data=>{
        if(data.dueDate!=null){
         this.list.push(data) ;
          this.dataset$ = this.list;
          console.log(this.dataset$);
        }
        }
      );

      console.log(this.dataset$);
    });
  }

  onSelection(event) {
    this.item = event.option.value;
    this.item.status = !this.item.status;
    this.taskList.push(this.item);
    console.log('release task list =', this.taskList);
  }

  releaseTask() {
    console.log('in release', this.taskList, this.programId);

    this.service.releaseTask(this.taskList, this.programId).subscribe(data => {
      console.log('*****Response of updtae');
      console.log(data);
    });
    // this.Close();
  }

  // Close(): void {
  //   this.dialogRef.close();
  // }
}
