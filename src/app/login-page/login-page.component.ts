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
  authCode: string = '';
  userIntaitedLogin: boolean = false;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {}

  login() {
    this.userIntaitedLogin = true;
  }

  submitAuthCode() {
    console.log('User is being authenticated');
    this.authService
      .login(this.email, this.password, this.authCode)
      .subscribe((res) => {
        console.log('User has been sucessfully authenticated');
        this.getAuthenticatedUser();
      });
  }

  getAuthenticatedUser() {
    this.authService.getAuthenticated().subscribe((res) => {
      console.log(res);
      localStorage.setItem('userAuthDetails', JSON.stringify(res));
      window.location.href = '/index';
    });
  }

  cancelLogin() {
    this.password = '';
    this.email = '';
    this.authCode = '';
    this.userIntaitedLogin = false;
    window.location.href = '/login';
  }
}
