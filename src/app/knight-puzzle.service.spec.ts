import { TestBed } from '@angular/core/testing';

import { KnightPuzzleService } from './knight-puzzle.service';

describe('KnightPuzzleService', () => {
  let service: KnightPuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnightPuzzleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
