import { Component } from '@angular/core';
import {MalariasService} from '../malarias.service';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public data:MalariasService) {}
  causes;
  ngAfterContentInit(): void{
    this.data.GetCauses().subscribe(res=>{
      this.causes=res;
    })
  }
}
