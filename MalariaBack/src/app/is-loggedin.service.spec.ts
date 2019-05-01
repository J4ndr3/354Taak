import { TestBed } from '@angular/core/testing';

import { IsLoggedinService } from './is-loggedin.service';

describe('IsLoggedinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsLoggedinService = TestBed.get(IsLoggedinService);
    expect(service).toBeTruthy();
  });
});
