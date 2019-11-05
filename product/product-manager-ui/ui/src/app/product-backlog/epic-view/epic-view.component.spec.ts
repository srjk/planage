import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicViewComponent } from './epic-view.component';

describe('EpicViewComponent', () => {
  let component: EpicViewComponent;
  let fixture: ComponentFixture<EpicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
