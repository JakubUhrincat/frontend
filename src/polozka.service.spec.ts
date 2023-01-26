import { TestBed } from '@angular/core/testing';

import { PolozkaService } from './polozka.service';

describe('PolozkaService', () => {
  let service: PolozkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolozkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

