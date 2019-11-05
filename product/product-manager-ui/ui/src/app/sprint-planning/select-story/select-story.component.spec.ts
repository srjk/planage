import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStoryComponent } from './select-story.component';

describe('SelectStoryComponent', () => {
  let component: SelectStoryComponent;
  let fixture: ComponentFixture<SelectStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
