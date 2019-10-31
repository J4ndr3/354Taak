import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { GeolocationPage } from './geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),IonicStorageModule.forRoot()
  ], providers: [Geolocation],
  declarations: [GeolocationPage]
})
export class GeolocationPageModule {}
