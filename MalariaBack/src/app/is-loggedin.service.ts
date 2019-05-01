import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class IsLoggedinService {

  constructor(private http: HttpClient,private router:Router) { }

  LogIn(user,pass){
    return this.http.get('http://localhost:30264/api/Login/?MP_Email='+user+'&MP_Password='+pass)
  }
  LogedIn(user,pass)
  {
    return this.http.get('http://localhost:30264/api/LogedIn/?MP_Email='+user+'&MP_Password='+pass)
  }
  testlogin(){
    var user = sessionStorage.getItem("user");
    var pass = sessionStorage.getItem("pass");
    var bool = false;
    this.LogedIn(user,pass).subscribe(data => {
      if (data[0].Logedin == false || data.toString() == "Access not allowed")
      {
        this.router.navigateByUrl('/');
        bool= false;
      }
    else{
      bool= true;
    }})
    return bool;
  }
}
