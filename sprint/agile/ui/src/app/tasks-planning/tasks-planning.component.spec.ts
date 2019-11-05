import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPlanningComponent } from './tasks-planning.component';

describe('TasksPlanningComponent', () => {
  let component: TasksPlanningComponent;
  let fixture: ComponentFixture<TasksPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
