import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { DiseaseComponent } from './disease/disease.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomComponent } from './symptom/symptom.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { RiskPeriodComponent } from './risk-period/risk-period.component';

const routes: Routes = [  {path:'Home',component:HomeComponent},
{ path: '', component: CausesComponent },
{ path: 'Disease', component: DiseaseComponent },
{ path:'Prevention', component:PreventionComponent },
{path:'Symptom', component:SymptomComponent},
{ path:'Treatment', component:TreatmentComponent },
{ path:'RiskPeriod', component:RiskPeriodComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
