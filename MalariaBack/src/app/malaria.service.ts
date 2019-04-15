import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MalariaService {

  constructor(private http: HttpClient) { }
  GetCauses() {
    return this.http.get('http://localhost:7836/api/Caus')
  }
  PostCaus(Cause){
    return this.http.post('http://localhost:7836/api/Caus',Cause)
  }
  DeleteCaus(id){
    return this.http.delete('http://localhost:7836/api/Caus/'+id)
  }
  PutCaus(id, Caus){
    return this.http.put('http://localhost:7836/api/Caus/'+id,Caus)
  }
}
