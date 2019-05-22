import { Component } from '@angular/core';
import {MalariasService} from '../malarias.service'
import {AlertController} from '@ionic/angular'
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public data :MalariasService, public alertcontroller:AlertController) {}

Diseases;
RiskPer;
Notif; //all notifications 
lastNote; //last notification

ngAfterContentInit(): void {
  this.data.GetDisease().subscribe(res => {
    this.Diseases = res;
    this.data.GetRiskPeriod().subscribe(res=>{
      this.RiskPer = res;
    })
    this.data.GetNote().subscribe(res => {
      this.Notif = res;
      this.lastNote = Object.keys(res).length;

    })
  });
}
ionViewDidEnter (){
  this.presentAlert()
}
async presentAlert(){
  const alert = await this.alertcontroller.create({
    header: 'Latest news',
    subHeader:'dDate of News' +  this.Notif[this.lastNote-1].Note_Date,
    message: this.Notif[this.lastNote-1].Note_Desc +"("+ this.Notif[this.lastNote-1].MP_Name+")",
    buttons:['OK']
  });

  await alert.present();
}
}
