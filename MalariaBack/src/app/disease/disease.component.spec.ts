import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MalariaService } from '../malaria.service';
import { DiseaseComponent } from './disease.component';
import { from } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DiseaseComponent', () => {
  let component: DiseaseComponent;
  let fixture: ComponentFixture<DiseaseComponent>;
  let service:MalariaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ DiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
