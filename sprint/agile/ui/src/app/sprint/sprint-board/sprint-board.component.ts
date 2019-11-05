import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintServiceService } from '../sprint-service.service';
import { SprintInterface, UserStoryInterface } from '../../sprint-interface';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-sprint-board',
  templateUrl: './sprint-board.component.html',
  styleUrls: ['./sprint-board.component.scss']
})
export class SprintBoardComponent implements OnInit {
  listOfSprints;
  dsableAddTask : boolean = true;
  dIsableAddTask : boolean = true;
  navigate: boolean = false;
  addedUserStories = [];

  sprints: SprintInterface = {
    userstory: []
  };
  constructor(private sprintService: SprintServiceService, private router: Router, private route: ActivatedRoute, ) { }
  productId;
  ngOnInit() {
    // this.dsableAddTask = false;
    if(!this.navigate){
    this.sprintService.getData().subscribe(data => {
      console.log(data);
      this.listOfSprints = data;
    });
  }
  else{
    this.listOfSprints = [];
  }
    this.productId = this.sprintService.getProductId();
    console.log('Length of user story is :: ',this.sprints.userstory.length)

  }

  submit() {
    this.dIsableAddTask= false;
    this.sprintService.postUserStories(this.addedUserStories, this.listOfSprints[0].sprintId).subscribe((data) => {
      this.navigate = true;
      this.router.navigate([`products/${this.productId}/userstories`, this.listOfSprints[0].sprintId]);
    });
  }

  userStoryAdd(userStoryAdded: UserStoryInterface) {
    this.addedUserStories.push(userStoryAdded);
    console.log(this.addedUserStories)
    this.dsableAddTask = false;


  }
  userStoryDelete(userStoryDeleted) {
    let counter = 0;
    this.addedUserStories.every((userStory) => {
      if (userStory.userStory.userstoryId === userStoryDeleted.userstoryId) {
        return;
      }
      counter++;
    });
    this.addedUserStories.splice(counter, 1);
    if (this.sprints.userstory.length === 0) {
      this.dsableAddTask = true;
    }

  }

  addSelectedUserStories() {
    console.log(this.sprints.userstory);
    if (this.sprints.userstory.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}