import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {MalariasService} from '../malarias.service'
declare var google;

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit,AfterContentInit {
map;
locations;
col;
@ViewChild('mapElement') mapElement;
  constructor(public data :MalariasService) { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.data.GetLocations().subscribe(res => {
      this.locations = res
    console.log(this.locations)
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: { lat: -26.5595, lng: 22.9375 },
        zoom: 4
      }
    );
    for (var i =0;i<=7;++i)
    {
      if (this.locations[i].sev_Lvl =="High")
      {
        this.col="red"
      }
      else if (this.locations[i].sev_Lvl =="Moderate")
      {
        this.col = "orange"
      }
      else if (this.locations[i].sev_Lvl =="Low")
      {
        this.col="green"
      }
      else
      {
        this.col ="yellow"
      }
      console.log("hallo")
      var circle = new google.maps.Circle({
        map:this.map,
        center:new google.maps.LatLng(this.locations[i].Lat,this.locations[i].Lng),
        radius:this.locations[i].Raduis,
        strokeColor: this.col,
        fillColor:this.col
    });
  }
  })
    
    
    }

}
