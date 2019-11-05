import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryDialogBoxComponent } from './user-story-dialog-box.component';

describe('UserStoryDialogBoxComponent', () => {
  let component: UserStoryDialogBoxComponent;
  let fixture: ComponentFixture<UserStoryDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
