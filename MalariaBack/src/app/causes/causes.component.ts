import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {
causes:object;
EditForm: FormGroup;
AddForm: FormGroup;
ncause:object;
rca:object;
rcv:object;
public ecs: any = { 
  Cause_ID :'',
  Cause_Desc : '',
  Des_ID : ''
};
Selection:number =0;
options:Array<object>;
editistrue=false;
addistrue= false;
addAct=true;
  constructor(private data: MalariaService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data.GetCauses().subscribe(res => {
      this.causes = res
      console.log(this.causes)})
  }
  addCause1(){
    this.AddForm = this.formBuilder.group({
      Cause_I: [""],
      Cause_de: [""],
      Dis_Name: [""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.options = JSON.parse(JSON.stringify(res));
    })
    this.addistrue=true;
  this.addAct=false}
    addCause(){
  var C_des = this.AddForm.get('Cause_de').value;
  var D_id = this.AddForm.get('Dis_Name').value;
    this.ncause = {
      "Cause_Desc": C_des,
      "Des_ID": D_id
  };
    this.data.PostCaus(this.ncause).subscribe(res => {
      this.rca = res
      console.log(this.rca)
      this.ngOnInit()}
      )
      this.addAct=true;
      this.addistrue=false;
  }
removeCause(id){
  this.data.DeleteCaus(id).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()})
}
edit(CID,CD,DID){
  this.data.GetDisease().subscribe( (res) => {
    // this.options.fill(res);
    // console.log(res);
    this.options = JSON.parse(JSON.stringify(res));
    console.log(this.options[0]);
    // console.log(JSON.parse(this.options)[0]);
  })
  this.EditForm = this.formBuilder.group({
    Cause_I: [CID],
    Cause_de: [CD],
    Dis_ID:[DID],
    Dis_Name: [DID]
  });
  this.editistrue =true;
}
updateCause(){
  var C_id = this.EditForm.get('Cause_I').value;
  var C_des = this.EditForm.get('Cause_de').value;
  var D_id = this.EditForm.get('Dis_Name').value;
  console.log(D_id)
  this.ncause = {
    "Cause_ID": C_id,
    "Cause_Desc": C_des,
    "Des_ID": D_id
};
  this.data.PutCaus(C_id,this.ncause).subscribe(res => {
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
