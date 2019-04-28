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

}
