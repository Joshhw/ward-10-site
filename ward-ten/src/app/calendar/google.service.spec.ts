import { TestBed } from '@angular/core/testing';

import { GoogleService } from './google.service';

describe('GoogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleService = TestBed.inject(GoogleService);
    expect(service).toBeTruthy();
  });
});
