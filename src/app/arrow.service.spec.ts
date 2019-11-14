import { TestBed } from '@angular/core/testing';

import { ArrowService } from './arrow.service';

describe('ArrowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrowService = TestBed.get(ArrowService);
    expect(service).toBeTruthy();
  });
});
