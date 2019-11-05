// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserstoryListComponent } from './userstory-list.component';
// import {
//   MatFormFieldModule, MatButtonModule, MatCardModule,
//   MatCheckboxModule, MatButtonToggle, MatButtonToggleModule, MatExpansionModule, MatListModule, MatAutocompleteModule
// } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SprintServiceService } from '../sprint-service.service';
// import { RouterModule, ActivatedRoute } from '@angular/router';

// describe('UserstoryListComponent', () => {
//   let component: UserstoryListComponent;
//   let fixture: ComponentFixture<UserstoryListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserstoryListComponent],
//       imports: [
//         MatFormFieldModule,
//         FormsModule,
//         ReactiveFormsModule,
//         BrowserAnimationsModule,
//         MatButtonModule,
//         MatCardModule,
//         MatCheckboxModule,
//         MatButtonToggleModule,
//         MatExpansionModule,
//         MatListModule,
//         MatAutocompleteModule,
//         RouterModule.forRoot([]),
//       ],
//       providers: [
//         { provide: SprintServiceService }]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserstoryListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   // it('should create', () => {
//   //   component.data = {};
//   //   expect(component).toBeTruthy();
//   // });
// });



import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryListComponent } from './userstory-list.component';
import {
  MatFormFieldModule, MatButtonModule, MatCardModule,
  MatCheckboxModule, MatButtonToggle, MatButtonToggleModule, MatExpansionModule, MatListModule, MatAutocompleteModule, MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintServiceService } from '../sprint-service.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { SprintInterface } from 'src/app/sprint-interface';
import { SprintComponent } from '../sprint/sprint.component';
import { UserStoryCardComponent } from '../user-story-card/user-story-card.component';


@Component({
  // tslint:disable-next-line: component-selector
  selector: `host-component`,
  template: `<app-userstory-list [selectedUserStoryData]="data"></app-userstory-list>`

})
class TestHostComponent {
  data: SprintInterface = {
    productId: '1',
    sprintId: '1',
    sprintname: 'SprintOne'

  };
}

fdescribe('UserstoryListComponent', () => {
  let fixture;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, UserstoryListComponent],
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
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatListModule,
        MatAutocompleteModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: SprintServiceService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   testHostComponent.data = {};
  //   let service: SprintServiceService;
  //   service.getUserStoryData('1');
  //   expect(testHostComponent).toBeTruthy();
  // });

});

