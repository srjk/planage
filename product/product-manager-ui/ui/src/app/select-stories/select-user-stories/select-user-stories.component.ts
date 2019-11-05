import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserStoryService } from '../../service/user-story.service';
import { PriorityStoryInterface } from '../../model/priority-story-interface';
import { RoadMapStories } from 'src/app/model/roadmap-stories-interface';
import { UserStoryInterface } from 'src/app/model/user-story-interface';

@Component({
  selector: 'app-select-user-stories',
  templateUrl: './select-user-stories.component.html',
  styleUrls: ['./select-user-stories.component.sass'],

})
export class SelectUserStoriesComponent implements OnInit {

  @Input() productId;
  @Input() epic;
  @Input() alreadySelectedUserStories;
  @Input() disabledStories;
  @Output() addStories = new EventEmitter();
  @Output() removeStories = new EventEmitter();
  userStories;
  page;
  epicId: any;
  epicName: any;
  nothingToShow = false;
  displayStories;

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.page = 0;
    this.epicId = this.epic.epicID;
    this.epicName = this.epic.epicName;
    this.page = 0;
    this.userStoryService.getUserStoryData(this.epicId, this.page)
      .subscribe((data) => {
        this.userStories = data;
        this.displayStories = this.userStories;
        this.page += 5;
      });
  }

  loadMoreStories() {
    this.userStoryService.getUserStoryData(this.epicId, this.page)
      .subscribe((data: any) => {
        if (data.length !== 0) {
          this.userStories.push(data[0]);
          this.page += 1;
        } else {
          this.nothingToShow = true;
        }
      });
  }

  addToSelections(story: UserStoryInterface) {
    const selectedStory: RoadMapStories = {
      id: story.id,
      userStoryName: story.userStoryName,
      tshirtSize: story.tshirtSize,
      dependencies: story.dependencies,
      percentCompleted: story.percentCompleted,
      startDate: story.startDate,
      endDate: story.endDate
    };
    this.addStories.emit(selectedStory);
  }
  removeFromSelections(story) {
    this.removeStories.emit(story);
  }
}
