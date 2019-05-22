import { Component, OnInit } from '@angular/core';
import {MalariasService} from '../malarias.service'
@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor(public data:MalariasService) { }
treatment ;
type=[];
ngAfterContentInit(): void{
  this.data.GetTreat().subscribe(res=>{
    this.treatment=res;
    for(var i=0; i<= Object.keys(res).length -1;++i){
      var T:string;
      T=res[i].Treat_Type;
      if(this.type.indexOf(T)==-1)
      {
        this.type.push(T)
      }
    }
  });
}
  ngOnInit() {
  }

}
