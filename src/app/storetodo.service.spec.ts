import { TestBed } from '@angular/core/testing';

import { StoretodoService } from './storetodo.service';

describe('StoretodoService', () => {
  let service: StoretodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoretodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
