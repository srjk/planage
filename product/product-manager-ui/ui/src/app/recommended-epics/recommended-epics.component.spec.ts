import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedEpicsComponent } from './recommended-epics.component';

describe('RecommendedEpicsComponent', () => {
  let component: RecommendedEpicsComponent;
  let fixture: ComponentFixture<RecommendedEpicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedEpicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedEpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
