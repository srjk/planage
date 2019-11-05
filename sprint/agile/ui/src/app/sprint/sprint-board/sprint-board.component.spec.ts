// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SprintBoardComponent } from './sprint-board.component';
// import {
//   MatAutocompleteModule, MatFormFieldModule, MatDialogModule
//   , MatButtonModule, MatCardModule, MatCheckboxModule
// } from '@angular/material';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { SprintServiceService } from '../sprint-service.service';
// import { Component } from '@angular/core';
// import { SprintInterface } from 'src/app/sprint-interface';
// import { UserStoryCardComponent } from '../user-story-card/user-story-card.component';
// import { SprintComponent } from '../sprint/sprint.component';
// import { RouterModule } from '@angular/router';

// fdescribe('SprintBoardComponent', () => {
//   let fixture;
//   let testHostComponent: SprintBoardComponent;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SprintBoardComponent, SprintComponent, UserStoryCardComponent],
//       imports: [
//         MatAutocompleteModule,
//         MatFormFieldModule,
//         MatDialogModule,
//         FormsModule,
//         ReactiveFormsModule,
//         BrowserAnimationsModule,
//         MatButtonModule,
//         MatCheckboxModule,
//         MatCardModule,
//         RouterModule.forRoot([])
//       ],
//       providers: [
//         { provide: SprintServiceService }]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SprintBoardComponent);
//     testHostComponent = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(testHostComponent).toBeTruthy();
//   });

// });

// @Component({
//   // tslint:disable-next-line: component-selector
//   selector: `host-component`,
//   template: 
//   `<app-sprint-board></app-sprint-board>`

// })
// class TestHostComponent {
//   data: SprintInterface = {
//     productId: '1',
//     sprintId: '1',
//     sprintname: 'SprintOne'

//   };
// }
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBoardComponent } from './sprint-board.component';
import { SprintComponent } from '../sprint/sprint.component';
import { UserStoryCardComponent } from '../user-story-card/user-story-card.component';
import {
  MatAutocompleteModule, MatFormFieldModule, MatDialogModule,
  MatButtonModule, MatCheckboxModule, MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserStoryInterface } from 'src/app/sprint-interface';

fdescribe('SprintBoardComponent', () => {
  let component: SprintBoardComponent;
  let fixture: ComponentFixture<SprintBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprintBoardComponent, SprintComponent, UserStoryCardComponent],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display sprints', () => {
    component.sprints = {
      sprintId: '1',
      sprintname: 'Sprint One',
      userstory: [
        {

        }
      ]
    };
    expect(component).toBeTruthy();
  });

  it('should display list of sprints', () => {
    component.listOfSprints = [{
      sprintId: '1',
      sprintname: 'Sprint One',
      userstory: [
        {

        }
      ]
    }];
    expect(component).toBeTruthy();
  });

  it('should get the product Id', () => {
    component.productId = '1',
      expect(component).toBeTruthy();
  });

  it('should  add the data', () => {
    const data = [{
      userstoryId: '1',
      userstoryName: 'UserStory One'
    }];
    component.userStoryAdd(data);
    expect(component).toBeTruthy();
  });

  it('should  delete the data', () => {
    const data = [{
      userstoryId: '1',
      userstoryName: 'UserStory One'
    }];
    component.userStoryDelete(data);
    expect(component).toBeTruthy();
  });

  it('should  submit the data', () => {
    const data = [{
      userstoryId: '1',
      userstoryName: 'UserStory One'
    }];
    component.submit();
    expect(component).toBeTruthy();
  });

});
