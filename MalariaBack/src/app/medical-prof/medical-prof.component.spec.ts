import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProfComponent } from './medical-prof.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MedicalProfComponent', () => {
  let component: MedicalProfComponent;
  let fixture: ComponentFixture<MedicalProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
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
