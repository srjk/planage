import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-program-task',
  templateUrl: './program-task.component.html',
  styleUrls: ['./program-task.component.sass']
})
export class ProgramTaskComponent implements OnInit {
  programId: string;
  dataset$;
  public toggleInputBox: boolean;
  addTasks = new FormGroup({
    taskName: new FormControl(''),
    startDate: new FormControl(''),
  });
  constructor(private service: TaskService, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.programId = this.activeroute.snapshot.params.id;
    this.service.getTask(this.programId).subscribe((data: any) => {
      console.log(data);
      this.dataset$ = data.result;
      console.log(data.result);
    });
  }
  addTaskFromPrograms(attr) {
    this.service.postProgramTasks(this.programId, attr).subscribe((data: any) => {
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
  date(task, event) {
    task.dueDate = new Date(event.value._d);
    this.service.updateTasks(task).subscribe();

  }
}
