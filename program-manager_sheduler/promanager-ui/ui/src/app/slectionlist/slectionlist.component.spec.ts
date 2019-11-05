import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectionlistComponent } from './slectionlist.component';

describe('SlectionlistComponent', () => {
  let component: SlectionlistComponent;
  let fixture: ComponentFixture<SlectionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlectionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlectionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
