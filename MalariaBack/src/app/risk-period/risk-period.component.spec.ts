import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPeriodComponent } from './risk-period.component';

describe('RiskPeriodComponent', () => {
  let component: RiskPeriodComponent;
  let fixture: ComponentFixture<RiskPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
