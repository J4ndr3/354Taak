import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {
causes:object;
EditForm: FormGroup;
ncause:object;
rca:object;
rcv:object;
public ecs: any = { 
  Cause_ID :'',
  Cause_Desc : '',
  Des_ID : ''
};
editistrue=false;
  constructor(private data: MalariaService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data.GetCauses().subscribe(res => {
      this.causes = res
      console.log(this.causes)})
  }
  addCause(){
    this.ncause = {
      "Cause_ID": 4,
      "Cause_Desc": "Mosquto",
      "Des_ID": 1
  };
    this.data.PostCaus(this.ncause).subscribe(res => {
      this.rca = res
      console.log(this.rca)
      this.ngOnInit()}
      )
  }
removeCause(id){
  this.data.DeleteCaus(id).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()})
}
edit(CID,CD,DID){
  this.EditForm = this.formBuilder.group({
    Cause_I: [CID],
    Cause_de: [CD],
    Dis_ID:[DID]
  });
  this.editistrue =true;
}
updateCause(){
  var C_id = this.EditForm.get('Cause_I').value;
  var C_des = this.EditForm.get('Cause_de').value;
  var D_id = this.EditForm.get('Dis_ID').value;
  this.ncause = {
    "Cause_ID": C_id,
    "Cause_Desc": C_des,
    "Des_ID": D_id
};
  this.data.PutCaus(C_id,this.ncause).subscribe(res => {
    this.rcv = res
    console.log(this.rcv)
    this.ngOnInit()})
}
}
