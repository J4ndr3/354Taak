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
}
