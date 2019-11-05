import { TestBed } from '@angular/core/testing';

import { SprintDataService } from './sprint-data.service';

describe('SprintDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintDataService = TestBed.get(SprintDataService);
    expect(service).toBeTruthy();
  });
});
