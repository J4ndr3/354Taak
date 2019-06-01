import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomComponent } from './symptom.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SymptomComponent', () => {
  let component: SymptomComponent;
  let fixture: ComponentFixture<SymptomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ SymptomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
