
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintComponent } from './sprint.component';
import {
  MatAutocompleteModule, MatFormFieldModule, MatDialogModule,
  MatButtonModule, MatCheckboxModule, MatCardModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SprintServiceService } from '../sprint-service.service';
import { Component } from '@angular/core';
import { SprintInterface } from 'src/app/sprint-interface';
import { UserStoryCardComponent } from '../user-story-card/user-story-card.component';


@Component({
  // tslint:disable-next-line: component-selector
  selector: `host-component`,
  template: `<app-sprint [sprintData]="data"></app-sprint>`

})
class TestHostComponent {
  data: SprintInterface = {
    productId: '1',
    sprintId: '1',
    sprintname: 'SprintOne'

  };
}

fdescribe('SprintComponent', () => {
  let fixture;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprintComponent, TestHostComponent, UserStoryCardComponent],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule
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

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });
  it('should create display sprint name and data', () => {
    testHostComponent.data = {
      productId: '1',
      sprintId: '',
      sprintname: 'sprint-one'
    };
    expect(testHostComponent).toBeTruthy();
  });

});

