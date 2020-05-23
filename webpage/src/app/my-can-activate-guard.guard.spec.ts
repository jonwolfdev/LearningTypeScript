import { TestBed } from '@angular/core/testing';

import { MyCanActivateGuardGuard } from './my-can-activate-guard.guard';

describe('MyCanActivateGuardGuard', () => {
  let guard: MyCanActivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyCanActivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
