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
//This action loads when the page is loaded
ngAfterContentInit(): void{
  // Here the treatment data is retrieved from th api
  this.data.GetTreat().subscribe(res=>{
    this.treatment=res;
    // the for is used to insert the treatment types that is not yet in the type array
    for(var i=0; i<= Object.keys(res).length -1;++i){
      var T:string;
      T=res[i].Treat_Type;
      // if the type is not yet in the type array the type will be inserted
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
