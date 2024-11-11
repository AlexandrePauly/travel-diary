import { TestBed } from '@angular/core/testing';

import { ShowPopupAccountService } from './show-popup-account.service';

describe('ShowPopupAccountService', () => {
  let service: ShowPopupAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPopupAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
