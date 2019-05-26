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
  //This action loads when the page is loaded
  ngAfterContentInit(): void{
    // Here the data will be colected from the api
    this.data.GetCauses().subscribe(res=>{
      //The result will be places into causes
      this.causes=res;
    })
  }
}
