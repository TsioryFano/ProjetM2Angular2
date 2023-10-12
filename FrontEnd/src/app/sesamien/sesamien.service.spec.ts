import { TestBed } from '@angular/core/testing';

import { SesamienService } from './sesamien.service';

describe('SesamienService', () => {
  let service: SesamienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesamienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
