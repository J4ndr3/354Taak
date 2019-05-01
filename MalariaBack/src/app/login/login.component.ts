import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsLoggedinService } from '../is-loggedin.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private data: IsLoggedinService,private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
    sessionStorage.clear();
  }
  onSubmit() {
    var id = this.loginForm.get('name').value;
    sessionStorage.setItem("user",id);
    var des = this.loginForm.get('message').value;
    sessionStorage.setItem("pass",des);

    this.data.LogIn(id, des).subscribe(data => {
      if (data[0].Correct == true)
      {
        this.router.navigateByUrl('/Disease');
      }
      else
      {
        alert("The email or password did not match")
      }
    });

  }

}
