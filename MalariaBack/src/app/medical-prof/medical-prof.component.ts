import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup, RequiredValidator } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service'

@Component({
  selector: 'app-medical-prof',
  templateUrl: './medical-prof.component.html',
  styleUrls: ['./medical-prof.component.scss']
})
export class MedicalProfComponent implements OnInit {

  medicalprofs:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  nMPs:object;
  rca:object;
  rcv:object;
  public ecs: any = { 
    MP_ID :'',
    MP_Name : '',
    MP_Surname : '',
    MP_Email :'',
    MP_Password:''
  };
  editistrue=false;
  addistrue= false;
  addAct=true;
    constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.login.testlogin();
      this.data.GetMP().subscribe(res => {
        this.medicalprofs = res
        })
    }
    addDisease1(){
      this.AddForm = this.formBuilder.group({
        MP_Name: ["",RequiredValidator],
        MP_Surname: ["",RequiredValidator],
        MP_Email:["",RequiredValidator],
        MP_Password:["",RequiredValidator]
      });
      this.addistrue=true;
    this.addAct=false}
      addDisease(){
    var MP_Name = this.AddForm.get('MP_Name').value;
    var MP_Surname = this.AddForm.get('MP_Surname').value;
    var MP_Email = this.AddForm.get('MP_Name').value;
    var MP_Password = this.AddForm.get('MP_Password').value;
    if (MP_Name== ''|| MP_Email ==''||MP_Password==''||MP_Surname=='')
    {
      alert("Please fill in all the fields")
    }
      else
      {
        this.nMPs = {
          "MP_Name": MP_Name,
          "MP_Surname": MP_Surname,
          "MP_Email":MP_Email,
          "MP_Password":MP_Password
      };
        this.data.PostMP(this.nMPs).subscribe(res => {
          this.rca = res
          
          this.ngOnInit()}
          )
          this.addAct=true;
          this.addistrue=false;
      }
    }
  removeDisease(id){
    if (Object.keys(this.nMPs).length < 2 )
    {
      alert("There is only one disease left.  You cannot delete the only disease.")
    }
    else
    {
    this.data.DeleteMP(id).subscribe(res => {
      this.rcv = res
      this.ngOnInit()})}
  }
  edit(MPID,MPN,MPS,MPE,MPP){
    this.EditForm = this.formBuilder.group({
      MP_ID:[MPID],
      MP_Name: [MPN],
      MP_Surname: [MPS],
      MP_Email:[MPE],
      MP_Password:[MPP]
    });
    this.editistrue =true;
  }
  updateDisease(){
    var MP_ID = this.EditForm.get('MP_ID').value;
    var MP_Name = this.EditForm.get('MP_Name').value;
    var MP_Surname = this.EditForm.get('MP_Surname').value;
    var MP_Email = this.EditForm.get('MP_Email').value;
    var MP_Password = this.EditForm.get('MP_Password').value;
    if (MP_Name== ''|| MP_Email ==''||MP_Password==''||MP_Surname=='')
    {
      alert("Please fill in all the fields")
    }
      else
      {
    this.nMPs = {
      "MP_ID":MP_ID,
      "MP_Name": MP_Name,
      "MP_Surname": MP_Surname,
      "MP_Email":MP_Email,
      "MP_Password":MP_Password
  };
    this.data.PutMP(MP_ID,this.nMPs).subscribe(res => {
      this.rcv = res
      this.editistrue =false;
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
