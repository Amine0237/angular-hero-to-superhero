import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notCompleteGuard } from './not-complete.guard';

describe('notCompleteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notCompleteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
