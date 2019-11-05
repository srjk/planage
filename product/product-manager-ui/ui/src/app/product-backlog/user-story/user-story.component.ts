import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserStoryInterface } from '../../model/user-story-interface';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.sass']
})

export class UserStoryComponent implements OnInit {

   @Input() userStoryData;
   @Output() addToPriority = new EventEmitter();
   @Output() removeFromPriority = new EventEmitter();
   @Output() openStoryDialogBox = new EventEmitter();
   dialogBoxData: UserStoryInterface ;

  isPrioritized = false;

  constructor() { }

  ngOnInit() {
    if (this.userStoryData.priorityLevel > 0) {
      this.isPrioritized = true;
    }
  }

  openStoryDetails() {
    this.openStoryDialogBox.emit(this.userStoryData);
  }
  togglePriority() {
     this.isPrioritized = ! this.isPrioritized;
     if (this.isPrioritized === true) {
       this.addToPriority.emit(this.userStoryData);
     } else {
       this.removeFromPriority.emit(this.userStoryData);
     }
  }
}
