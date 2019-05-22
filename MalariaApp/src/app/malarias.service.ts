import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MalariasService {

  constructor(private http: HttpClient) { }
  GetLocations() {
    return this.http.get('http://localhost:30264/api/Locations')
  }
    GetDisease() {
      return this.http.get('http://localhost:30264/api/Deseases')
    }
  GetRiskPeriod() {
      return this.http.get('http://localhost:30264/api/Risk_Period')
  }
  GetCauses(){
    return this.http.get('http://localhost:30264/api/Caus')
  }
  GetTreat(){
    return this.http.get('http://localhost:30264/api/Treatments')
  }
  GetSymptoms() {
    return this.http.get('http://localhost:30264/api/Symptoms')
  }

}
