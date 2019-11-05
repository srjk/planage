import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryChecklistComponent } from './user-story-checklist.component';

describe('UserStoryChecklistComponent', () => {
  let component: UserStoryChecklistComponent;
  let fixture: ComponentFixture<UserStoryChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
