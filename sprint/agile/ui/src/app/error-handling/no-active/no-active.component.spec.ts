import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoActiveComponent } from './no-active.component';

describe('NoActiveComponent', () => {
  let component: NoActiveComponent;
  let fixture: ComponentFixture<NoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
