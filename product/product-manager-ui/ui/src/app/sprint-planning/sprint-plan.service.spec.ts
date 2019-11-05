import { TestBed } from '@angular/core/testing';

import { SprintPlanService } from './sprint-plan.service';

describe('SprintPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintPlanService = TestBed.get(SprintPlanService);
    expect(service).toBeTruthy();
  });
});
