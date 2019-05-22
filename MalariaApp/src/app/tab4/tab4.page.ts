import { Component, OnInit } from '@angular/core';
import { MalariasService } from '../malarias.service';  
// Hierdie import die Service wat ons gecreate het in die bladsy in

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  // Hierdie is om die  woord data te toe ken as die link tussen die service en die page
  constructor(public data: MalariasService) { }
  //variable Preventions
  Preventions;
  //Nuwe method met die naam ngAfterContentInit wat beteken dat die volgende gebeur as die page oopgemaak word
  ngAfterContentInit(): void {
    //gebruik die data link wat ons gemaak het om aan die get event te subscribe wat ons in die service het en ken die result wat teruggekry word toe aan res
    this.data.GetPrevention().subscribe(res => {
      //res word dan in Preventions ingelees wat ons vroer as n variable declare het
      this.Preventions = res;    });
    }
  
  ngOnInit() {
  }

}
