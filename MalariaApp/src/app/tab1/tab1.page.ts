import { Component } from '@angular/core';
import {MalariasService} from '../malarias.service'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public data :MalariasService) {}

Diseases;
RiskPer;

ngAfterContentInit(): void {
  this.data.GetDisease().subscribe(res => {
    this.Diseases = res;
    this.data.GetRiskPeriod().subscribe(res=>{
      this.RiskPer = res;
    })
  });
}
}
