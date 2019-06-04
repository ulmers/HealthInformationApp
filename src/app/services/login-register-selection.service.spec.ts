import { TestBed } from '@angular/core/testing';

import { LoginRegisterSelectionService } from './login-register-selection.service';

describe('LoginRegisterSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRegisterSelectionService = TestBed.get(LoginRegisterSelectionService);
    expect(service).toBeTruthy();
  });
});
