import { TestBed } from '@angular/core/testing';

import { NakupService } from './nakup.service';

describe('NakupService', () => {
  let service: NakupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NakupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

