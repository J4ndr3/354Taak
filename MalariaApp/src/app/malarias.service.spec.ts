import { TestBed } from '@angular/core/testing';

import { MalariasService } from './malarias.service';

describe('MalariasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariasService = TestBed.get(MalariasService);
    expect(service).toBeTruthy();
  });
});
