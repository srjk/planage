import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEpicsComponent } from './select-epics.component';

describe('SelectEpicsComponent', () => {
  let component: SelectEpicsComponent;
  let fixture: ComponentFixture<SelectEpicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEpicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
