import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { SprintInterface } from '../sprint-interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { SelectStoryComponent } from '../select-story/select-story.component';
import { SprintPlanService } from '../sprint-plan.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.sass']
})
export class SprintComponent implements OnInit {

  @Input() sprint: SprintInterface;
  @Output() userStoryUpdated = new EventEmitter();
  @Output() dropEvent = new EventEmitter();
  constructor(public dialog: MatDialog, private sprintPlanService: SprintPlanService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dropEvent.emit(event);
  }
  addUserStories() {
    const dialogRef = this.dialog.open(SelectStoryComponent, {
      width: '800px',
      data: this.sprint
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.sprintPlanService.addUserStories(result.userStories, this.sprint.sprintId).subscribe((data) => {
        if (result !== undefined) {
          this.userStoryUpdated.emit(result);
        }
      });
    });
  }
}
