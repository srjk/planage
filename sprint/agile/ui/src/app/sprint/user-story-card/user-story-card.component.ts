import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-story-card',
  templateUrl: './user-story-card.component.html',
  styleUrls: ['./user-story-card.component.scss']
})
export class UserStoryCardComponent implements OnInit {
  selected = false;
  userStoryList = [];
  @Input() userStoryData;
  @Input() sprintId;
  @Input() sprintName;
  @Output() userStoryAdded = new EventEmitter();
  @Output() userStoryDeleted = new EventEmitter();

  constructor() { }
  checked;

  ngOnInit() {
      // console.log(this.userStoryData);
  }

  toggle() {
    this.selected = !this.selected;

    if (this.selected === true) {
      // this.checked = true;
      console.log(this.userStoryData);
      const dataToBeSent = {
        userStory: this.userStoryData,
        sprintId: this.sprintId,
        sprintName: this.sprintName
      }
      this.userStoryAdded.emit(dataToBeSent);
      this.userStoryList.push(this.userStoryData);
      // console.log(this.userStoryList);


    } else {
      this.userStoryDeleted.emit(this.userStoryData);
    }

  }

}
