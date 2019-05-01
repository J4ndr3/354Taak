import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DiseaseComponent } from './disease/disease.component';
import { CausesComponent } from './causes/causes.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomComponent } from './symptom/symptom.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { RiskPeriodComponent } from './risk-period/risk-period.component';
import { LocationComponent } from './location/location.component';
import { MedicalProfComponent } from './medical-prof/medical-prof.component';
import { NotificatonsComponent } from './notificatons/notificatons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DiseaseComponent,
    CausesComponent,
    NavComponent,
    PreventionComponent,
    SymptomComponent,
    TreatmentComponent,
    RiskPeriodComponent,
    LocationComponent,
    MedicalProfComponent,
    NotificatonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
