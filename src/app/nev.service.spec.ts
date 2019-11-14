import { TestBed } from '@angular/core/testing';

import { NevService } from './nev.service';

describe('NevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NevService = TestBed.get(NevService);
    expect(service).toBeTruthy();
  });
});
