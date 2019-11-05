import { TestBed } from '@angular/core/testing';

import { KanbanBoardService } from './kanban-board.service';

describe('KanbanBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KanbanBoardService = TestBed.get(KanbanBoardService);
    expect(service).toBeTruthy();
  });
});
