import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BacklogService } from '../../service/backlog.service';
import { UserStoryInterface } from '../../model/user-story-interface';
import { UserStoryService } from '../../service/user-story.service';
import { PriorityStoryInterface } from '../../model/priority-story-interface';
import { MatDialog } from '@angular/material/dialog';
import { UserStoryDialogBoxComponent } from '../user-story-dialog-box/user-story-dialog-box.component';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.sass']
})
export class EpicsComponent implements OnInit {
  @ViewChild('userStoryName', {static: false}) userStoryElement: ElementRef;

  epicData: any;
  page: any = 0;
  epicId: any;
  epicName: any;
  selectedUserStory;
  userStories: UserStoryInterface[] = [];
  priorityStories: PriorityStoryInterface[] = [];
  displayStories;
  updatedUserStory: UserStoryInterface = { userStoryName: '', productId: '', epicId: this.epicId };
  toggleInputBox = false;
  nothingToShow = false;


  userStoryInformation = this.formBuilder.group({
    userStory: ['', [Validators.required, Validators.minLength(7), Validators.pattern('^[a-zA-Z0-9 ]*')]],
  });

  constructor(private formBuilder: FormBuilder, private productService: BacklogService, private userStoryService: UserStoryService,
              public dialog: MatDialog, private backlogService: BacklogService) { }

  ngOnInit() {
    this.backlogService.getSelectedEpic()
      .subscribe((epic) => {
        this.epicData = epic;
      });
    console.log(this.displayStories);
    this.epicId = this.epicData.epicID;
    this.epicName = this.epicData.epicName;
    if (this.epicData.prioritizedUserStories === null) {
      this.epicData.prioritizedUserStories = [];
    }
    if (this.epicData.prioritizedUserStories.length !== 0) {
      this.priorityStories = this.epicData.prioritizedUserStories;
    }

    this.page = 0;
    this.userStoryService.getUserStoryData(this.epicId, this.page)
      .subscribe((data) => {
        this.userStories = data;
        this.displayStories = this.userStories;
        this.page += 5;
        console.log(this.displayStories);
      });
  }

  addUserStory() {
    const addNewStory: UserStoryInterface = { userStoryName: '', productId: '', epicId: this.epicId };
    addNewStory.userStoryName = this.userStoryInformation.value.userStory;
    if (addNewStory.userStoryName !== '') {
     this.userStoryService.addUserStory(addNewStory, this.epicId).subscribe((updatedUserStory) => {
       this.userStories.unshift(updatedUserStory);
       this.userStoryInformation.setValue({userStory: ''});
     });
     this.toggleInputBox = false;
    }
  }

  addPriority(userStory: UserStoryInterface) {
    const recievedPriorityStory: PriorityStoryInterface = {
      id: userStory.id,
      userStoryName: userStory.userStoryName,
      priorityLevel: 10
    };
    this.productService.addToPriority(this.epicId, recievedPriorityStory).subscribe((data) => {
      this.priorityStories = data.prioritizedUserStories;
    });

  }
  deletePriority(story: PriorityStoryInterface) {
    story.priorityLevel = 0;
    this.userStories.forEach((savedUserStory) => {
      if (savedUserStory.id === story.id) {
        savedUserStory.priorityLevel = story.priorityLevel;
      }
    });
    this.productService.deleteFromPriority(story.id, this.epicId).subscribe((data) => {
      data.epics.forEach((element) => {
        if (element.epicID === this.epicId) {
          this.priorityStories = element.prioritizedUserStories;
        }
      });
    });
  }

  enableInputBox() {
    this.toggleInputBox = true;
    if (this.userStoryElement !== undefined) {}
    setTimeout(() => {
      this.userStoryElement.nativeElement.focus();
    }, 0);
  }

  loadMoreStories() {
    this.userStoryService.getUserStoryData(this.epicId, this.page)
      .subscribe((data: any) => {
        if (data.length !== 0) {
          this.userStories.push(data[0]);
          this.page += 5;
        } else {
          this.nothingToShow = true;
        }
      });

  }

  openStoryDialogBox(story: UserStoryInterface) {
    const storyId = story.id;
    const dialogRef = this.dialog.open(UserStoryDialogBoxComponent, {
      width: '700px',
      data: [story, [storyId]],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.userStoryService.updateUserStory(result).subscribe((data) => {
          let counter = 0;
          this.displayStories.every((userStory: UserStoryInterface) => {
            if (userStory.id === result.id) {
              return;
            }
            counter++;
          });
          this.displayStories[counter] = result;
        });
      }
    });
  }

  populateSelectedUserStory(story) {
    this.userStoryService.fetchUserStoryData(story.id).subscribe((data) => {
      this.selectedUserStory = data;
      this.openStoryDialogBox(this.selectedUserStory);
    });
  }
}
