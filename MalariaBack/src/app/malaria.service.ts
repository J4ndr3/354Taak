import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MalariaService {

  constructor(private http: HttpClient) { }
  GetCauses() {
    return this.http.get('http://localhost:30264/api/Caus')
  }
  PostCaus(Cause){
    return this.http.post('http://localhost:30264/api/Caus',Cause)
  }
  DeleteCaus(id){
    return this.http.delete('http://localhost:30264/api/Caus/'+id)
  }
  PutCaus(id, Caus){
    return this.http.put('http://localhost:30264/api/Caus/'+id,Caus)
  }
  GetDisease() {
    return this.http.get('http://localhost:30264/api/Deseases')
  }
  PostDisease(Disease){
    return this.http.post('http://localhost:30264/api/Deseases',Disease)
  }
  DeleteDisease(id){
    return this.http.delete('http://localhost:30264/api/Deseases/'+id)
  }
  PutDisease(id, Disease){
    return this.http.put('http://localhost:30264/api/Deseases/'+id,Disease)
  }
  GetPrevention() {
    return this.http.get('http://localhost:30264/api/Preventions')
  }
  PostPrevention(Prevention){
    return this.http.post('http://localhost:30264/api/Preventions',Prevention)
  }
  DeletePrevention(id){
    return this.http.delete('http://localhost:30264/api/Preventions/'+id)
  }
  PutPrevention(id, Prevention){
    return this.http.put('http://localhost:30264/api/Preventions/'+id,Prevention)
  }
  GetSymp_Des() {
    return this.http.get('http://localhost:30264/api/Symp_Des')
  }
  PostSymp_Des(Loc_Des){
    return this.http.post('http://localhost:30264/api/Symp_Des',Loc_Des)
  }
  DeleteSymp_Des(id){
    return this.http.delete('http://localhost:30264/api/Symp_Des/'+id)
  }
  PutSymp_Des(id, Loc_Des){
    return this.http.put('http://localhost:30264/api/Symp_Des/'+id, Loc_Des)
  }
GetSymptoms() {
    return this.http.get('http://localhost:30264/api/Symptoms')
  }
  PostSymptoms(symp){
    return this.http.post('http://localhost:30264/api/Symptoms',symp)
  }
  DeleteSymptoms(id){
    return this.http.delete('http://localhost:30264/api/Symptoms/'+id)
  }
  PutSymptoms(id, symp){
    return this.http.put('http://localhost:30264/api/Symptoms/'+id,symp)
  }

  GetTreatment() {
    return this.http.get('http://localhost:30264/api/Treatments')
  }
  PostTreatment(Treatment){
    return this.http.post('http://localhost:30264/api/Treatments',Treatment)
  }
  DeleteTreatment(id){
    return this.http.delete('http://localhost:30264/api/Treatments/'+id)
  }
  PutTreatment(id, Treatment){
    return this.http.put('http://localhost:30264/api/Treatments/'+id,Treatment)
  }

}
