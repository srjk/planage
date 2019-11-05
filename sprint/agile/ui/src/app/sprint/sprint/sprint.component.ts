import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SprintInterface } from '../../sprint-interface';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  @Input() sprintData: SprintInterface;
  @Output() userStoryAdd = new EventEmitter();
  @Output() userStoryDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.sprintData);
  }

  userStoryAdded(userStoryAdded) {
    this.userStoryAdd.emit(userStoryAdded);
    // console.log(userStoryAdded);
  }
  userStoryDeleted(userStoryDeleted) {
    this.userStoryDelete.emit(userStoryDeleted);
    // console.log('Deleted' + userStoryDeleted);
  }
}
