import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations:object;
  loc_des_s:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  EditFormLoc_des: FormGroup;
  AddFormLoc_des: FormGroup;
  nlocation:object;
  nlocdes:object;
  rca:object;
  rcv:object;
  public ecs: any = { 
    Loc_ID :'',
    Loc_Name : '',
    Loc_Severity : ''
  };
  SelectionDes:number =0;
  optionsd:Array<object>;
  SelectionLoc:number =0;
  optionsl:Array<object>;
  editistrue=false;
  addistrue= false;
  addLDisTrue = false;
  editLDisTrue = false;
  addAct=true;
  constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.login.testlogin();
    this.data.GetLocations().subscribe(res => {
      this.locations = res
      console.log(this.locations)})
      this.data.GetLoc_Des().subscribe(res=>{
        this.loc_des_s = res
      })
  }
  addLoc_des(){
    this.AddFormLoc_des = this.formBuilder.group({
      Loc_Name: [""],
      Dis_Name: [""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetLocations().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.addLDisTrue = true;
  }
  addLD(){
    var L_Name = this.AddFormLoc_des.get('Loc_Name').value;
    var D_Name = this.AddFormLoc_des.get('Dis_Name').value;
    if (L_Name == '' || D_Name == '')
    {
      alert('Please fill in all the fields')
    }
    else
    {
      this.nlocdes = {
        "Loc_ID": L_Name,
        "Des_ID": D_Name
    };
    console.log("Loc_ID",L_Name,"Des_ID",D_Name)
      this.data.PostLoc_Des(this.nlocdes).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        ) 
        this.addLDisTrue = false;
    }
      
  }
  removeLoc_Des(id){
    this.data.DeleteLoc_Des(id).subscribe(res => {
      this.rcv = res
      console.log(this.rcv)
      this.ngOnInit()})
  }
  editloc_des(LDID,LN,DN){
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetLocations().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.EditFormLoc_des = this.formBuilder.group({
      Loc_Des_ID: [LDID],
      Loc_Name: [LN],
      Dis_Name:[DN]
    });
    this.editLDisTrue= true;
  }
  updateLoc_Des(){
    var L_D_id = this.EditFormLoc_des.get('Loc_Des_ID').value;
    var L_Name = this.EditFormLoc_des.get('Loc_Name').value;
    var D_Name = this.EditFormLoc_des.get('Dis_Name').value;
    console.log(L_D_id)
    if (L_Name == '' || D_Name == '')
    {
      alert('Please fill in all the fields')
    }
    else
    {
    this.nlocdes = {
      "Loc_Des_ID": L_D_id,
      "Loc_ID": L_Name,
      "Des_ID": D_Name
  };
  console.log(this.nlocdes)
    this.data.PutLoc_Des(L_D_id,this.nlocdes).subscribe(res => {
      this.rcv = res
      console.log(this.rcv)
      this.ngOnInit()
    })
    this.editLDisTrue= false;
  }
  }
  cancelALD(){
    this.addLDisTrue=false;
    this.AddFormLoc_des.reset();
  }
  cancelULD(){
    this.editLDisTrue=false;
    this.EditFormLoc_des.reset();
  }
  
  addLocation1(){
    this.AddForm = this.formBuilder.group({
      Loc_ID: [""],
      Loc_Name: [""],
      Loc_Severity: [""]
    });
    this.addistrue=true;
  this.addAct=false}
  addLocation(){
    var L_Name = this.AddForm.get('Loc_Name').value;
    var L_Severity = this.AddForm.get('Loc_Severity').value;
    if (L_Name == '' || L_Severity == '')
    {
      alert('Please fill in all the fields')
    }
    else
    {
      this.nlocation = {
        "Loc_Name": L_Name,
        "Loc_Severity": L_Severity
    };
      this.data.PostLocations(this.nlocation).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        )
        this.addAct=true;
        this.addistrue=false;
      }
    }
    removeLocation(id){
      this.data.DeleteLocations(id).subscribe(res => {
        this.rcv = res
        console.log(this.rcv)
        this.ngOnInit()})
    }
    edit(LID,LN,LS){
      this.EditForm = this.formBuilder.group({
        Loc_ID: [LID],
        Loc_Name: [LN],
        Loc_Severity:[LS],
      });
      this.editistrue =true;
    }
    updateLocation(){
      var L_id = this.EditForm.get('Loc_ID').value;
      var L_Name = this.EditForm.get('Loc_Name').value;
      var L_Severity = this.EditForm.get('Loc_Severity').value;
      console.log(L_id)
      if (L_Name == '' || L_Severity == '')
    {
      alert('Please fill in all the fields')
    }
    else
    {
      this.nlocation = {
        "Loc_ID": L_id,
        "Loc_Name": L_Name,
        "Loc_Severity": L_Severity
    };
      this.data.PutLocations(L_id,this.nlocation).subscribe(res => {
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
