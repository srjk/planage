import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BacklogService } from 'src/app/service/backlog.service';
import { UserStoryService } from 'src/app/service/user-story.service';

@Component({
  selector: 'app-epic-view',
  templateUrl: './epic-view.component.html',
  styleUrls: ['./epic-view.component.sass']
})
export class EpicViewComponent implements OnInit {

  constructor(private userStoryService: UserStoryService ,
              private backlogService: BacklogService) { }

  ngOnInit() {

  }
}
