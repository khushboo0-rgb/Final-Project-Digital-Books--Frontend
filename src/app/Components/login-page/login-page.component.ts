import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import AuthResponse from 'src/app/entity/authResponse';
import LogInRequest from 'src/app/entity/loginRequest';



@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent implements OnInit {

  auth: LogInRequest = new LogInRequest();
  loginResponse: AuthResponse = new AuthResponse();

  checkLogin() {
    this.logInService.login(this.auth).subscribe(
      resp => {
        this.loginResponse = resp;
        if (resp.role === "author") {

          sessionStorage.setItem('role', resp.role);
          sessionStorage.setItem('username', resp.user.userName);
          sessionStorage.setItem('email', resp.user.email);
          this.router.navigate(['author']);
        }
        if (resp.role === "reader") {
          sessionStorage.setItem('role', resp.role);
          sessionStorage.setItem('username', resp.user.userName);
          sessionStorage.setItem('email', resp.user.email);
          this.router.navigate(['reader']);
        }
      },
      err => {
        this.loginResponse = err;
        alert(this.loginResponse.message);
      }
    )
  }

  constructor(private logInService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}