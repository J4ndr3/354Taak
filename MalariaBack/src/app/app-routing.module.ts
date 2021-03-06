import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { DiseaseComponent } from './disease/disease.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomComponent } from './symptom/symptom.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { RiskPeriodComponent } from './risk-period/risk-period.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MedicalProfComponent } from './medical-prof/medical-prof.component';
import { NotificatonsComponent } from './notificatons/notificatons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
const routes: Routes = [  {path:'Home',component:HomeComponent},
{ path: '', component: LoginComponent },
{ path: 'Causes', component: CausesComponent },
{ path: 'Disease', component: DiseaseComponent },
{ path:'Prevention', component:PreventionComponent },
{path:'Symptom', component:SymptomComponent},
{ path:'Treatment', component:TreatmentComponent },
{ path:'RiskPeriod', component:RiskPeriodComponent },
{path:'Location',component:LocationComponent},
{path:'Med',component:MedicalProfComponent},
{path:'Note',component:NotificatonsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule,HttpClientModule],
  exports: [RouterModule, FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
