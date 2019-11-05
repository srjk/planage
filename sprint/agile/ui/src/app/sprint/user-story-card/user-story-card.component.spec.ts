import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStoryCardComponent } from './user-story-card.component';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintServiceService } from '../sprint-service.service';
import { Component } from '@angular/core';
import { UserStoryInterface } from 'src/app/sprint-interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: `host-component`,
  template: `<app-user-story-card [userStoryData]="data"></app-user-story-card>`

})
class TestHostComponent {
  data: UserStoryInterface = {
    userstoryId: '1',
    userstoryName: '',
  };
}


fdescribe('UserStoryCardComponent', () => {
  let fixture;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserStoryCardComponent, TestHostComponent],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule
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

  it('should create display selected userstory', () => {
    testHostComponent.data = {
      userstoryId: '1',
      userstoryName: '',
    };
    expect(testHostComponent).toBeTruthy();
  });
});

