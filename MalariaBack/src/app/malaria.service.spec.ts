import { TestBed,getTestBed  } from '@angular/core/testing';

import { MalariaService } from './malaria.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { observable } from 'rxjs';

describe('MalariaService', () => {
  let injector: TestBed;
  let service: MalariaService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MalariaService]
    });
    injector = getTestBed();
    service = injector.get(MalariaService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: MalariaService = TestBed.get(MalariaService);
    expect(service).toBeTruthy();
  });

  describe('#GetCauses', () => {
    it('should return an Observable', () => {

      service.GetCauses().subscribe(value => {
        expect(value).toBe('observable value');
      });
      const req = httpMock.expectOne('http://localhost:30264/api/Caus');
      expect(req.request.method).toBe("GET");
    });
  });

  describe('#GetDisease', () => {
    it('should return an Observable', () => {

      service.GetDisease().subscribe(value => {
        expect(value).toBe('observable value');
      });
      const req = httpMock.expectOne('http://localhost:30264/api/Deseases');
      expect(req.request.method).toBe("GET");
    });
  });
  describe('#GetLocations', () => {
    it('should return an Observable', () => {

      service.GetLocations().subscribe(value => {
        expect(value).toBe('observable value');
      });
      const req = httpMock.expectOne('http://localhost:30264/api/Locations');
      expect(req.request.method).toBe("GET");
    });
  });

  describe('#DeleteLocations', () => {
    it('should return an Observable', () => {

      service.DeleteLocations(1016).subscribe(value => {
        expect(value).toBe('observable value');
      });
      const req = httpMock.expectOne('http://localhost:30264/api/Locations/1016');
      expect(req.request.method).toBe("DELETE");
      console.log(req)
    });
  });

});
