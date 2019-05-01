import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import {IsLoggedinService} from '../is-loggedin.service';

@Component({
  selector: 'app-risk-period',
  templateUrl: './risk-period.component.html',
  styleUrls: ['./risk-period.component.scss']
})
export class RiskPeriodComponent implements OnInit {
  loc_des_s:object;
  EditFormRP_Des: FormGroup;
  AddFormRP_Des: FormGroup;
  nSymDes:object;
  addLDisTrue = false;
  editLDisTrue = false;
  SelectionDes:number =0;
  optionsd:Array<object>;
  SelectionRP:number =0;
  optionsl:Array<object>;

  RiskPeriods:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  nRiskPeriod:object;
  rca:object;
  rcv:object;
  public editRP: any = { 
    RiskP_ID:'',
    RiskP_Desc: '',
    RiskP_Type:''
  };
  Selection:number =0;
  options:Array<object>;
  editistrue=false;
  addistrue= false;
  addAct=true;

  constructor(private data: MalariaService,private login:IsLoggedinService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login.testlogin()
    this.data.GetRiskPeriod().subscribe(res => {
      this.RiskPeriods = res
      console.log(this.RiskPeriods)})
      this.data.GetRP_Des().subscribe(res=>{
        this.loc_des_s = res
        console.log(this.loc_des_s)
      })
  }
  addLoc_des(){
    this.AddFormRP_Des = this.formBuilder.group({
      RiskP_Desc: [""],
      Dis_Name: [""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetRiskPeriod().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.addLDisTrue = true;
  }
  addLD(){
    var L_Name = this.AddFormRP_Des.get('RiskP_Desc').value;
    var D_Name = this.AddFormRP_Des.get('Dis_Name').value;
    if (L_Name==''||D_Name == '')
    {
      alert("Please fill in all the fields")
    }
    else{
      this.nSymDes = {
        "RiskP_ID": L_Name,
        "Des_ID": D_Name
    };
    console.log("Loc_ID",L_Name,"Des_ID",D_Name)
      this.data.PostRP_Des(this.nSymDes).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        ) 
        this.addLDisTrue = false;
    }
      
  }
  removeLoc_Des(id){
    this.data.DeleteRP_Des(id).subscribe(res => {
      this.rcv = res
      console.log(this.rcv)
      this.ngOnInit()})
  }
  editloc_des(LDID,LN,DN){
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetRiskPeriod().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.EditFormRP_Des = this.formBuilder.group({
      RP_Des_ID: [LDID],
      RiskP_Desc: [LN],
      Dis_Name:[DN]
    });
    this.editLDisTrue= true;
  }
  updateLoc_Des(){
    var L_D_id = this.EditFormRP_Des.get('RP_Des_ID').value;
    var L_Name = this.EditFormRP_Des.get('RiskP_Desc').value;
    var D_Name = this.EditFormRP_Des.get('Dis_Name').value;
    if (L_Name==''||D_Name=='')
    {
      alert("Please fill in all the fields")
    }
    else
    {
      console.log(L_D_id)
      this.nSymDes = {
        "RP_Des_ID": L_D_id,
        "RiskP_ID": L_Name,
        "Des_ID": D_Name
    };
    console.log(this.nSymDes)
      this.data.PutSymp_Des(L_D_id,this.nSymDes).subscribe(res => {
        this.rcv = res
        console.log(this.rcv)
        this.ngOnInit()
      })
      this.editLDisTrue= false;
    }
    
  }
  cancelALD(){
    this.addLDisTrue=false;
    this.AddFormRP_Des.reset();
  }
  cancelULD(){
    this.editLDisTrue=false;
    this.EditFormRP_Des.reset();
  }

  addRP1(){
    this.AddForm = this.formBuilder.group({
      RiskP_Desc: [""],
      RiskP_Type: [""]
    });
    this.addistrue=true;
  this.addAct=false}
  addRiskPeriods(){
    var RP_des = this.AddForm.get('RiskP_Desc').value;
     var RP_type = this.AddForm.get('RiskP_Type').value;
     if (RP_des==''||RP_type=='')
     {
       alert("Please enter all values")
     }
     else
     {
      this.nRiskPeriod = {
        "RiskP_Desc": RP_des,
        "RiskP_Type": RP_type
    };
    this.data.PostRiskPeriod(this.nRiskPeriod).subscribe(res => {
      this.rca = res
      console.log(this.rca)
      this.ngOnInit()}
      )
      this.addAct=true;
      this.addistrue=false;
     }
      
  }
  removeRiskPeriod(id){
    this.data.DeleteRiskPeriod(id).subscribe(res => {
      this.rcv = res
      console.log(this.rcv)
      this.ngOnInit()})
  }
  
  edit(RID,RD,RT){
    this.data.GetDisease().subscribe( (res) => {
      this.options = JSON.parse(JSON.stringify(res));
      console.log(this.options[0]);
    })
    this.EditForm = this.formBuilder.group({
        RiskP_ID: [RID],
        RiskP_Desc: [RD],
        RiskP_Type: [RT]
  
    });
    this.editistrue =true;
  }
  updateRiskPeriod (){
    var RP_id = this.EditForm.get('RiskP_ID').value;
    var RP_des = this.EditForm.get('RiskP_Desc').value;
    var RP_type = this.EditForm.get('RiskP_Type').value;
    if (RP_des==''||RP_type=='')
    {
      alert("Please enter all values")
    }
    else
    {
      this.nRiskPeriod = {
        "RiskP_ID": RP_id,
        "RiskP_Desc": RP_des,
        "RiskP_Type": RP_type
        
    };
      this.data.PutRiskPeriod(RP_id,this.nRiskPeriod).subscribe(res => {
        this.rcv = res
        console.log(this.rcv)
        this.ngOnInit()
      })
    }
    
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
