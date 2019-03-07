import { TestBed } from '@angular/core/testing';

import { ActivateCheckService } from './activate-check.service';

describe('ActivateCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivateCheckService = TestBed.get(ActivateCheckService);
    expect(service).toBeTruthy();
  });
});
