import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTasksComponent } from './program-tasks.component';

describe('ProgramTasksComponent', () => {
  let component: ProgramTasksComponent;
  let fixture: ComponentFixture<ProgramTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
