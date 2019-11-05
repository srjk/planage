import { TestBed } from '@angular/core/testing';

import { FreezesprintService } from './freezesprint.service';

describe('FreezesprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreezesprintService = TestBed.get(FreezesprintService);
    expect(service).toBeTruthy();
  });
});
