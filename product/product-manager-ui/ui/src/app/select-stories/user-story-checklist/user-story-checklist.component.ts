import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStoryInterface } from 'src/app/model/user-story-interface';
import { PriorityStoryInterface } from 'src/app/model/priority-story-interface';

@Component({
  selector: 'app-user-story-checklist',
  templateUrl: './user-story-checklist.component.html',
  styleUrls: ['./user-story-checklist.component.sass']
})
export class UserStoryChecklistComponent implements OnInit {

  checked = false;
  disabled;
  @Input() story: UserStoryInterface;
  @Input() selectedStoriesFromEpic;
  @Input() disabledStories;
  @Output() selectUserStory = new EventEmitter();
  @Output() deselectUserStory = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.story);
    this.disabled = false;
    console.log(this.disabledStories);
    this.selectedStoriesFromEpic.forEach((element) => {
      if (this.story.id === element.id) {
        this.checked = true;
        return;
      }
    });
    if (this.disabledStories !== undefined && this.disabledStories !== null && this.disabledStories.length !== 0) {
      this.disabledStories.forEach((userStoryId: string) => {
        if (userStoryId === this.story.id) {
          this.disabled = true;
        }
      });
    } else {
      if (this.story.unavailable === true) {
        this.disabled = true;
      }
    }
  }

  onChange() {
    this.checked = !this.checked;
    if (this.checked === true) {
      this.selectUserStory.emit(this.story);
    } else {
      this.deselectUserStory.emit(this.story);
    }
  }

}
