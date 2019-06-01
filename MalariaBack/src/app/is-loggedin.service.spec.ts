import { TestBed } from '@angular/core/testing';

import { IsLoggedinService } from './is-loggedin.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('IsLoggedinService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],}));

  it('should be created', () => {
    const service: IsLoggedinService = TestBed.get(IsLoggedinService);
    expect(service).toBeTruthy();
  });
});
