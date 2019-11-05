import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFromExcelDialogComponent } from './import-from-excel-dialog.component';

describe('ImportFromExcelDialogComponent', () => {
  let component: ImportFromExcelDialogComponent;
  let fixture: ComponentFixture<ImportFromExcelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFromExcelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFromExcelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
