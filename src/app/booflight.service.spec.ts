import { TestBed } from '@angular/core/testing';

import { BooflightService } from './booflight.service';

describe('BooflightService', () => {
  let service: BooflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
