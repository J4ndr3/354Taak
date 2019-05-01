import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import {IsLoggedinService} from '../is-loggedin.service'

@Component({
  selector: 'app-notificatons',
  templateUrl: './notificatons.component.html',
  styleUrls: ['./notificatons.component.scss']
})
export class NotificatonsComponent implements OnInit {
  notes:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  ncause:object;
  Selection:number =0;
options:Array<object>;
addistrue= false;
addAct=true;
  constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login.testlogin();
    this.data.GetNote().subscribe(res => {
      this.notes = res
      console.log(this.notes)})
  }
  addCause1(){
    this.AddForm = this.formBuilder.group({
      Note_Desc: [""],
      Note_Date: [""],
      MP_Name: [""]
    });
    this.data.GetMP().subscribe( (res) => {
      this.options = JSON.parse(JSON.stringify(res));
    })
    this.addistrue=true;
  this.addAct=false}
    addCause(){
  var Note_Desc = this.AddForm.get('Note_Desc').value;
  var Note_Date = this.AddForm.get('Note_Date').value;
  var MP_Name = this.AddForm.get('MP_Name').value;
  console.log(MP_Name)
    this.ncause = {
      "Note_Desc": Note_Desc,
      "Note_Date": Note_Date,
      "MP_ID":MP_Name
  };
    this.data.PostNote(this.ncause).subscribe(res => {
      this.ngOnInit()}
      )
      this.addAct=true;
      this.addistrue=false;
  }
}
