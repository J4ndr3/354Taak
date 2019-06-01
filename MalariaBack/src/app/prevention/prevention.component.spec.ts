import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionComponent } from './prevention.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PreventionComponent', () => {
  let component: PreventionComponent;
  let fixture: ComponentFixture<PreventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ PreventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
