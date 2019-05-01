import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service';
@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
  treatments:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  ntreatment:object;
  rca:object;
  rcv:object;
  public editTreat: any = { 
    Treat_ID :'',
    Treat_Desc : '',
    Treat_Type:'',
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
    this.data.GetTreatment().subscribe(res => {
      this.treatments = res
      console.log(this.treatments)})
  }
  addTreat1(){
    this.AddForm = this.formBuilder.group({
      Treat_ID: [""],
      Treat_Desc: [""],
      Treat_Type: [""],
      Dis_Name:[""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.options = JSON.parse(JSON.stringify(res));
    })
    this.addistrue=true;
  this.addAct=false}
    addTreatment(){
  var T_des = this.AddForm.get('Treat_Desc').value;
   var T_type = this.AddForm.get('Treat_Type').value;
  var D_id = this.AddForm.get('Dis_Name').value;
  if (T_des==''||T_type==''||D_id=='')
  {
    alert("Please fill in all fields")
  }
  else
  {
    this.ntreatment = {
      "Treat_Desc": T_des,
      "Treat_Type": T_type,
      "Des_ID": D_id
  };
    this.data.PostTreatment(this.ntreatment).subscribe(res => {
      this.rca = res
      console.log(this.rca)
      this.ngOnInit()}
      )
      this.addAct=true;
      this.addistrue=false;
  }
    
  }
removeTreatment(id){
  this.data.DeleteTreatment(id).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()})
}
edit(TID,TD,TT,DID){
  this.data.GetDisease().subscribe( (res) => {
    this.options = JSON.parse(JSON.stringify(res));
    console.log(this.options[0]);
  })
  this.EditForm = this.formBuilder.group({
    Treat_ID: [TID],
    Treat_Desc: [TD],
    Treat_Type:[TT],
    Dis_Name: [DID]
  });
  this.editistrue =true;
}
updateTreatment(){
  var T_id = this.EditForm.get('Treat_ID').value;
  var T_des = this.EditForm.get('Treat_Desc').value;
  var T_type = this.EditForm.get('Treat_Type').value;
  var D_id = this.EditForm.get('Dis_Name').value;
  if (T_des==''||T_type==''||D_id=='')
  {
    alert("Please fill in all fields")
  }
  else
  {
  console.log(D_id)
  this.ntreatment = {
    "Treat_ID": T_id,
    "Treat_Desc": T_des,
    "Treat_Type": T_type,
    "Des_ID": D_id
};
  this.data.PutTreatment(T_id,this.ntreatment).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()
  })}
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
