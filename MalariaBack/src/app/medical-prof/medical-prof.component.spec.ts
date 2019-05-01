import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProfComponent } from './medical-prof.component';

describe('MedicalProfComponent', () => {
  let component: MedicalProfComponent;
  let fixture: ComponentFixture<MedicalProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
