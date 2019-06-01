import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MalariasService {

  constructor(private http: HttpClient) { }
  GetLocations() {
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Locations')
  }

  GetPrevention() {
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Preventions')
  }
    GetDisease() {
      return this.http.get('http://192.168.0.119/MalariaAPI2/api/Deseases')
    }
  GetRiskPeriod() {
      return this.http.get('http://192.168.0.119/MalariaAPI2/api/Risk_Period')
  }
  GetCauses(){
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Caus')
  }
  GetTreat(){
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Treatments')
  }
  GetSymptoms() {
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Symptoms')

  }
  GetNote(){
    return this.http.get('http://192.168.0.119/MalariaAPI2/api/Notifications')
  }

}
