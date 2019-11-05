import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDetailComponent } from './add-product-detail.component';

describe('AddProductDetailComponent', () => {
  let component: AddProductDetailComponent;
  let fixture: ComponentFixture<AddProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
