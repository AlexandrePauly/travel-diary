import { TestBed } from '@angular/core/testing';

import { ShowCarousselService } from './show-caroussel.service';

describe('ShowCarousselService', () => {
  let service: ShowCarousselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCarousselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
