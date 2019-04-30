import { Component, OnInit } from '@angular/core';
import { MalariaService } from '../malaria.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.scss']
})
export class SymptomComponent implements OnInit {
  loc_des_s:object;
  EditFormSymp_Des: FormGroup;
  AddFormSymp_Des: FormGroup;
  nSymDes:object;
  addLDisTrue = false;
  editLDisTrue = false;
  SelectionDes:number =0;
  optionsd:Array<object>;
  SelectionSym:number =0;
  optionsl:Array<object>;

  symptoms:object;
  EditForm: FormGroup;
  AddForm: FormGroup;
  nsymptom:object;
  rca:object;
  rcv:object;
  public ecs: any = { 
    Symp_ID :'',
    Symp_Desc : '',
    Symp_Type : '',
    Symp_Duration:''
  };
  Selection:number =0;
  options:Array<object>;
  editistrue=false;
  addistrue= false;
  addAct=true;
  constructor(private data: MalariaService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data.GetSymptoms().subscribe(res => {
      this.symptoms = res
      console.log(this.symptoms)})
      this.data.GetSymp_Des().subscribe(res=>{
        this.loc_des_s = res
      })
  }
  addLoc_des(){
    this.AddFormSymp_Des = this.formBuilder.group({
      Symp_Desc: [""],
      Dis_Name: [""]
    });
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetSymptoms().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.addLDisTrue = true;
  }
  addLD(){
    var L_Name = this.AddFormSymp_Des.get('Symp_Desc').value;
    var D_Name = this.AddFormSymp_Des.get('Dis_Name').value;
      this.nSymDes = {
        "Symp_ID": L_Name,
        "Des_ID": D_Name
    };
    console.log("Loc_ID",L_Name,"Des_ID",D_Name)
      this.data.PostSymp_Des(this.nSymDes).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        ) 
        this.addLDisTrue = false;
  }
  removeLoc_Des(id){
    this.data.DeleteSymp_Des(id).subscribe(res => {
      this.rcv = res
      console.log(this.rcv)
      this.ngOnInit()})
  }
  editloc_des(LDID,LN,DN){
    this.data.GetDisease().subscribe( (res) => {
      this.optionsd = JSON.parse(JSON.stringify(res));
    })
    this.data.GetSymptoms().subscribe((res)=>{
      this.optionsl = JSON.parse(JSON.stringify(res))
    })
    this.EditFormSymp_Des = this.formBuilder.group({
      Symp_Des_ID: [LDID],
      Symp_Desc: [LN],
      Dis_Name:[DN]
    });
    this.editLDisTrue= true;
  }
  updateLoc_Des(){
    var L_D_id = this.EditFormSymp_Des.get('Symp_Des_ID').value;
    var L_Name = this.EditFormSymp_Des.get('Symp_Desc').value;
    var D_Name = this.EditFormSymp_Des.get('Dis_Name').value;
    console.log(L_D_id)
    this.nSymDes = {
      "Symp_Des_ID": L_D_id,
      "Symp_ID": L_Name,
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
  cancelALD(){
    this.addLDisTrue=false;
    this.AddFormSymp_Des.reset();
  }
  cancelULD(){
    this.editLDisTrue=false;
    this.EditFormSymp_Des.reset();
  }
  

  addSymptom1(){
    this.AddForm = this.formBuilder.group({
      Symp_Desc: [""],
      Symp_Type: [""],
      Symp_Duration:[""]
    });
    this.addistrue=true;
  this.addAct=false}
  addSymptom(){
    var S_Desc = this.AddForm.get('Symp_Desc').value;
    var S_Type = this.AddForm.get('Symp_Type').value;
    var S_Dur = this.AddForm.get('Symp_Duration').value;
      this.nsymptom = {
        "Symp_Desc": S_Desc,
        "Symp_Type": S_Type,
        "Symp_Duration":S_Dur
    };
      this.data.PostSymptoms(this.nsymptom).subscribe(res => {
        this.rca = res
        console.log(this.rca)
        this.ngOnInit()}
        )
        this.addAct=true;
        this.addistrue=false;
    }
    removeSymptom(id){
      this.data.DeleteSymptoms(id).subscribe(res => {
        this.rcv = res
        console.log(this.rcv)
        this.ngOnInit()})
    }
    edit(SID,SD,ST,SDUR){
      this.EditForm = this.formBuilder.group({
        Symp_ID: [SID],
      Symp_Desc: [SD],
      Symp_Type: [ST],
      Symp_Duration:[SDUR]
      });
      this.editistrue =true;
    }
    updateSymptom(){
      var S_ID = this.EditForm.get('Symp_ID').value;
      var S_Desc = this.EditForm.get('Symp_Desc').value;
      var S_Type = this.EditForm.get('Symp_Type').value;
      var S_DUR = this.EditForm.get('Symp_Duration').value;
      console.log(S_ID)
      this.nsymptom = {
        "Symp_ID": S_ID,
        "Symp_Desc": S_Desc,
        "Symp_Type": S_Type,
        "Symp_Duration":S_DUR
    };
      this.data.PutSymptoms(S_ID,this.nsymptom).subscribe(res => {
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
 
