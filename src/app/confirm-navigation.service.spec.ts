import { TestBed } from '@angular/core/testing';

import { ConfirmNavigationService } from './confirm-navigation.service';

describe('ConfirmNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmNavigationService = TestBed.get(ConfirmNavigationService);
    expect(service).toBeTruthy();
  });
});
