import { TestBed } from '@angular/core/testing';

import { ProgramcardService } from './programcard.service';

describe('ProgramcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramcardService = TestBed.get(ProgramcardService);
    expect(service).toBeTruthy();
  });
});
