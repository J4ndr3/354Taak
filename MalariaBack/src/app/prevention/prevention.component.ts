import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss']
})
export class PreventionComponent implements OnInit {

  preventions:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  nprevention:object;
  rca:object;
  rcv:object;
  public editPrev: any = { 
    Prev_ID :'',
    Prev_Desc : '',
    Prev_Type:'',
    Des_ID : ''
  };
  Selection:number =0;
  options:Array<object>;
  editistrue=false;
  addistrue= false;
  addAct=true;

  constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login.testlogin();
    this.data.GetPrevention().subscribe(res => {
      this.preventions = res
      console.log(this.preventions)})
  }
  addPrev1(){
    this.AddForm = this.formBuilder.group({
      Prev_ID: [""],
      Prev_Desc: [""],
      Prev_Type: [""],
      Dis_Name:[""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.options = JSON.parse(JSON.stringify(res));
    })
    this.addistrue=true;
  this.addAct=false}
    addPrevention(){
  var P_des = this.AddForm.get('Prev_Desc').value;
   var P_type = this.AddForm.get('Prev_Type').value;
  var D_id = this.AddForm.get('Dis_Name').value;
    this.nprevention = {
      "Prev_Desc": P_des,
      "Prev_Type": P_type,
      "Des_ID": D_id
  };
    this.data.PostPrevention(this.nprevention).subscribe(res => {
      this.rca = res
      console.log(this.rca)
      this.ngOnInit()}
      )
      this.addAct=true;
      this.addistrue=false;
  }
removePrevention(id){
  this.data.DeletePrevention(id).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()})
}
edit(PID,PD,PT,DID){
  this.data.GetDisease().subscribe( (res) => {
    this.options = JSON.parse(JSON.stringify(res));
    console.log(this.options[0]);
  })
  this.EditForm = this.formBuilder.group({
    Prev_ID: [PID],
    Prev_Desc: [PD],
    Prev_Type:[PT],
    Dis_Name: [DID]
  });
  this.editistrue =true;
}
updatePrevention(){
  var P_id = this.EditForm.get('Prev_ID').value;
  var P_des = this.EditForm.get('Prev_Desc').value;
  var P_type = this.EditForm.get('Prev_Type').value;
  var D_id = this.EditForm.get('Dis_Name').value;
  console.log(D_id)
  this.nprevention = {
    "Prev_ID": P_id,
    "Prev_Desc": P_des,
    "Prev_Type": P_type,
    "Des_ID": D_id
};
  this.data.PutPrevention(P_id,this.nprevention).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()
  })
}
cancelUC(){
  this.EditForm.reset();
  this.editistrue =false;
 
}
cancelAC(){
  this.addAct=true;
  this.addistrue =false;
  this.AddForm.reset();
}


}
