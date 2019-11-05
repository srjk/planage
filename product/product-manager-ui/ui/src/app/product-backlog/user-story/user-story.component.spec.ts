import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatIconModule} from '@angular/material';
import { UserStoryComponent } from './user-story.component';
import { EpicDataInterface } from '../../model/epic-data.interface';
import { Component } from '@angular/core';
import { UserStoryInterface } from '../../model/user-story-interface';

fdescribe('UserStoryComponent', () => {
  let fixture;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ UserStoryComponent, TestHostComponent]
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
});


@Component({
  selector: `host-component`,
  template: `<app-user-story [userStoryData]="data"></app-user-story>`

})
class TestHostComponent {
  data: UserStoryInterface = {
    id: '1',
    productId: '',
    priorityLevel: 10,
    userStoryName: 'User Story One',
    epicId: '111',
    description : '',
    tshirt_size: '',
    dependencies: [{ id: 1 , story_name: ''}]
  };
}
