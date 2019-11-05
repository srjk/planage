import { Component, OnInit, ViewChild, ElementRef, DoCheck, OnDestroy } from '@angular/core';
import { SprintInterface } from '../sprint-interface';
import { FormBuilder, Validators } from '@angular/forms';
import { SprintPlanService } from '../sprint-plan.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.sass']
})
export class SprintListComponent implements OnInit, DoCheck, OnDestroy {
  @ViewChild('listName', { static: false }) listElement: ElementRef;
  productId: string;
  listOfSprints: SprintInterface[] = [];
  showInput = false;
  page = 0;
  recievedData = {};
  newSprintInformation = this.formBuilder.group({
    sprintName: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z0-9 ]*')]],
  });
  constructor(private formBuilder: FormBuilder,
              private sprintPlanService: SprintPlanService) { }

  ngOnInit() {
    this.productId = this.sprintPlanService.getProductId();
    this.sprintPlanService.getAllSprints(this.page).subscribe((data) => {
      this.page += 4;
      this.listOfSprints = data;
    });
    this.sprintPlanService.establishWebSocketConnection();
  }

  ngDoCheck() {
    if (this.sprintPlanService.getRecievedData() !== undefined) {
      let event;
      const recievedData = this.sprintPlanService.getRecievedData();

      if (recievedData.cardMoved !== undefined) {
        event = recievedData.cardMoved;
        if (event.previousContainerId === event.containerId) {
          this.listOfSprints.forEach((sprint) => {
            if (sprint.sprintId === event.containerId) {
              sprint.userStories = event.containerData;
              this.sprintPlanService.updateSprint(sprint).subscribe();
            }
          });
        } else {
          this.listOfSprints.forEach((sprint) => {
            if (sprint.sprintId === event.previousContainerId) {
              sprint.userStories = event.previousContainerData;
              this.sprintPlanService.updateSprint(sprint).subscribe();
            }
            if (sprint.sprintId === event.containerId) {
              sprint.userStories = event.containerData;
              this.sprintPlanService.updateSprint(sprint).subscribe();
            }
          });
        }
      } else if (recievedData.sprintAddedEvent !== undefined) {
        event = recievedData.sprintAddedEvent;
        this.listOfSprints.push(event);
      } else {
        event = recievedData.sprintUpdatedEvent;
        console.log(event);
        this.listOfSprints.forEach((sprint) => {
          if (sprint.sprintId === event.sprintId) {
            sprint.userStories = event.userStories;
          }
        });
      }
      this.sprintPlanService.resetRecievedData();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const cardMovedEvent = {
      previousContainerId: event.previousContainer.id,
      containerId: event.container.id,
      previousIndex: event.previousIndex,
      currentIndex: event.currentIndex,
      previousContainerData: event.previousContainer.data,
      containerData: event.container.data
    };
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.sprintPlanService.getSockClient().send(`/app/message/${this.productId}`, {},
      JSON.stringify({
        sprintUpdatedEvent: undefined,
        sprintAddedEvent: undefined,
        cardMoved: cardMovedEvent
      }));
  }
  addSprint() {
    const newSprint: SprintInterface = {
      sprintName: this.newSprintInformation.value.sprintName,
      userStories: []
    };
    this.sprintPlanService.addSprint(newSprint).subscribe((data) => {
      console.log(data);
      this.sprintPlanService.getSockClient().send(`/app/message/${this.productId}`, {},
        JSON.stringify({
          sprintUpdatedEvent: undefined,
          sprintAddedEvent: data,
          cardMoved: undefined
        }));
    });
    this.toggleInput();
  }
  userStoryUpdated(updatedSprint) {
    this.sprintPlanService.getSockClient().send(`/app/message/${this.productId}`, {},
    JSON.stringify({
      sprintUpdatedEvent: updatedSprint,
      sprintAddedEvent: undefined,
      cardMoved: undefined
    }));
  }
  toggleInput() {
    this.showInput = !this.showInput;
    setTimeout(() => {
      this.listElement ? this.listElement.nativeElement.focus() : console.log();
    }, 0);
  }

  ngOnDestroy() {
    this.sprintPlanService.disconnect();

  }
}
