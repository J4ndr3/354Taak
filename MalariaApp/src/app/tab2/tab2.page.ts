import { Component } from '@angular/core';
import {MalariasService} from '../malarias.service';
import { NavController} from '@ionic/angular';
import {Router} from '@angular/router'
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public data: MalariasService,public alertcontroller:AlertController, private navController: NavController, private router: Router) {}
  Symptoms;
  Type=[];
  Risk;
  ngAfterContentInit(): void {
    this.data.GetRiskPeriod().subscribe(res=> {
      this.Risk=res;
    })
    this.data.GetSymptoms().subscribe(res => {
    this.Symptoms = res;
for (var i =0; i<= Object.keys(res).length -1 ;++i)
    {
      var s:string;
      s= res[i].Symp_Type;
        console.log(i)
        if (this.Type.indexOf(s) ==-1)
        {
          this.Type.push(s)
        }
      }        
  });
}
loadTreatments(){
  this.navController.navigateRoot('/tabs/tab6')}

  async PresentRisk(){
    const alert = await this.alertcontroller.create({
      header: 'Risk Periods',
      message: '<p style="font-size:12px"><b>'+this.Risk[0].RiskP_Type +'</b><br>'+this.Risk[0].RiskP_Desc+'<b><br><br>'+this.Risk[1].RiskP_Type +'</b><br>'+this.Risk[1].RiskP_Desc+'</p>',
      buttons:['OK']
    });
  
    await alert.present();
  }
  }
