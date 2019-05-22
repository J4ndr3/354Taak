import { Component } from '@angular/core';
import {MalariasService} from '../malarias.service';
import { NavController} from '@ionic/angular';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public data: MalariasService,private navController: NavController, private router: Router) {}
  Symptoms;
  Type=[];
  ngAfterContentInit(): void {
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
}
