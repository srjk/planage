import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTaskComponent } from './program-task.component';

describe('ProgramTaskComponent', () => {
  let component: ProgramTaskComponent;
  let fixture: ComponentFixture<ProgramTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
