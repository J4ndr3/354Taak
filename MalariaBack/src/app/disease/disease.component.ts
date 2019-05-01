import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service'

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {
  Disease:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  nDiseas:object;
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
    constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.login.testlogin();
      this.data.GetDisease().subscribe(res => {
        this.Disease = res
        console.log(this.Disease)})
    }
    addDisease1(){
      this.AddForm = this.formBuilder.group({
        Des_Name: [""],
        Des_Desc: [""]
      });
      this.addistrue=true;
    this.addAct=false}
      addDisease(){
    var D_name = this.AddForm.get('Des_Name').value;
    var D_Desc = this.AddForm.get('Des_Desc').value;
    if (D_name ==''|| D_Desc == '')
    {
      alert("Please fill in all the fields")
    }
    else
    {
      this.nDiseas = {
        "Des_Name": D_name,
        "Des_Desc": D_Desc
    };
      this.data.PostDisease(this.nDiseas).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        )
        this.addAct=true;
        this.addistrue=false;
    }
     
    }
  removeDisease(id){
    if (Object.keys(this.Disease).length < 2 )
    {
      alert("There is only one disease left.  You cannot delete the only disease.")
    }
    else
    {
      this.data.DeleteDisease(id).subscribe(res => {
        this.rcv = res
        console.log(this.rcv)
        this.ngOnInit()})
    }
   
  }
  edit(CID,CD,DID){
    this.EditForm = this.formBuilder.group({
      Des_ID: [CID],
      Des_Name: [CD],
      Des_Desc: [DID]
    });
    this.editistrue =true;
  }
  updateDisease(){
    var C_id = this.EditForm.get('Des_ID').value;
    var C_des = this.EditForm.get('Des_Name').value;
    var D_id = this.EditForm.get('Des_Desc').value;
    console.log(D_id)
    this.nDiseas = {
      "Des_ID": C_id,
      "Des_Name": C_des,
      "Des_Desc": D_id
  };
    this.data.PutDisease(C_id,this.nDiseas).subscribe(res => {
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
  
