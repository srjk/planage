import { Component, OnInit } from '@angular/core';
import { UserstoryPlanningService } from '../userstory-planning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.scss']
})

export class UserStoryComponent implements OnInit {

  dataset$: any;

  constructor(private sprintPlanning: UserstoryPlanningService, private router: Router) {
  }

  ngOnInit() {
    this.sprintPlanning.getData().subscribe((data) => {
      this.dataset$ = data.result;
      console.log(this.dataset$);
    });
  }

  deleteUserstory(userstoryId) {
    this.sprintPlanning.deleteUserStory(userstoryId).subscribe((data) => {
      console.log(userstoryId, data);
    });
  }
}
