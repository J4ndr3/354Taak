import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { DiseaseComponent } from './disease/disease.component';

const routes: Routes = [  {path:'Home',component:HomeComponent},
{ path: '', component: CausesComponent },
{ path: 'Disease', component: DiseaseComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
