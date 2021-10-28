import { AuthService } from './../Injectable/AuthService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  password: string = '';
  email: string = '';
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {}

  login() {
    console.log('User is being authenticated');
    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        console.log('User has been sucessfully authenticated');
        this.getAuthenticatedUser();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAuthenticatedUser() {
    this.authService.getAuthenticated().subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('userAuthDetails', JSON.stringify(res));
        window.location.href = '/index';
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
