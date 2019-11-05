import { TestBed } from '@angular/core/testing';

import { AddparticipantService } from './addparticipant.service';

describe('AddparticipantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddparticipantService = TestBed.get(AddparticipantService);
    expect(service).toBeTruthy();
  });
});
