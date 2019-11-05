import { TestBed } from '@angular/core/testing';

import { UserstoryPlanningService } from './userstory-planning.service';

describe('UserstoryPlanningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserstoryPlanningService = TestBed.get(UserstoryPlanningService);
    expect(service).toBeTruthy();
  });
});
