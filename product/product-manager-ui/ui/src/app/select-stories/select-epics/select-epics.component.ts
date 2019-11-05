import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { BacklogService } from '../../service/backlog.service';
import { PriorityStoryInterface } from '../../model/priority-story-interface';

@Component({
  selector: 'app-select-epics',
  templateUrl: './select-epics.component.html',
  styleUrls: ['./select-epics.component.sass']
})
export class SelectEpicsComponent implements OnInit, OnDestroy {

  productId;
  productName;
  epics=[];
  @Input() alreadySelectedStories;
  @Input() disabledStories;
  selectedStories = [];
  @Output() goBack = new EventEmitter();

  constructor(private productService: BacklogService) { }

  ngOnInit() {
    this.productService.fetchDataAsBehaviour()
    .subscribe((data) => {
      this.productId = data.id;
      this.productName =  data.productName;
      this.epics = data.epics;
   });

    if (this.alreadySelectedStories !== undefined && this.alreadySelectedStories !== null ) {
     this.selectedStories = this.alreadySelectedStories;
     console.log(this.selectedStories);
   }
  }
  ngOnDestroy() {
    this.goBack.emit(this.selectedStories);
  }
  addToSelectedStories(stories) {
    this.selectedStories = this.selectedStories.concat(stories);
    console.log(this.selectedStories);
  }
  removeFromSelectedStories(story) {
    let counter = 0;
    const selectedStory: PriorityStoryInterface = {
        id: story.id,
        userStoryName: story.userStoryName
      };
    this.selectedStories.every((element) => {
            if (element.id === selectedStory.id) {
              return false;
             } else {
              counter ++;
             }
          });
    this.selectedStories.splice(counter, 1);
  }
}
