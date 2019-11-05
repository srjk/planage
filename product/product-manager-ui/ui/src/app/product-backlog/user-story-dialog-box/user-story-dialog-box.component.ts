import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-story-dialog-box',
  templateUrl: './user-story-dialog-box.component.html',
  styleUrls: ['./user-story-dialog-box.component.sass']
})
export class UserStoryDialogBoxComponent implements OnInit {
  showInformationView = true;
  disabledStories = [];
  userStoryInformation = this.formBuilder.group({
    userStoryDescription: ['', [Validators.pattern('^[a-zA-Z0-9 ]*')]],
  });
  tShirtSizes: string[] = ['XL', 'L', 'M', 'S'];
  constructor(public dialogRef: MatDialogRef<UserStoryDialogBoxComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private formBuilder: FormBuilder) {
                this.disabledStories.push(... this.data[1]);
               }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  switchFormView(selectedStoryData) {
    this.showInformationView = !this.showInformationView;
  }
  selectStories(selectedStoryData) {
    if (selectedStoryData !== undefined) {
      this.data[0].dependencies = selectedStoryData;
    }
  }
}
