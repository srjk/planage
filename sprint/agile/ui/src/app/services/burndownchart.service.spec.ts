import { TestBed } from '@angular/core/testing';

import { BurndownchartService } from './burndownchart.service';

describe('BurndownchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BurndownchartService = TestBed.get(BurndownchartService);
    expect(service).toBeTruthy();
  });
});
