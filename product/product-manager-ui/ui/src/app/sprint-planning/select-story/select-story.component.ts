import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SprintInterface } from '../sprint-interface';

@Component({
  selector: 'app-select-story',
  templateUrl: './select-story.component.html',
  styleUrls: ['./select-story.component.sass']
})
export class SelectStoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectStoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SprintInterface) { }

  ngOnInit() {
  }

  addUserStories(listOfUserStories) {
    this.data.userStories = listOfUserStories;
    this.dialogRef.close(this.data);

  }
  onNoClick() {
    this.dialogRef.close();
  }
}
