import { TestBed } from '@angular/core/testing';

import { MalariaService } from './malaria.service';

describe('MalariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariaService = TestBed.get(MalariaService);
    expect(service).toBeTruthy();
  });
});
