import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPeriodComponent } from './risk-period.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RiskPeriodComponent', () => {
  let component: RiskPeriodComponent;
  let fixture: ComponentFixture<RiskPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ RiskPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
