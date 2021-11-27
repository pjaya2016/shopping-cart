import { AuthService } from './../Injectable/AuthService';
import { Register } from './models/Register';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  firstName: String = '';
  lastName: String = '';
  email: String = '';
  password: String = '';
  confirmPassword: String = '';
  register: Register | undefined;
  authService: AuthService;
  qrcode: any;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      console.error('Password does not match!');
    }

    this.register = new Register(
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );

    this.authService.register(this.register).subscribe((res) => {
      console.log(res);

      var objectURL = URL.createObjectURL(res);

      this.qrcode = objectURL;
      //window.location.href = '/login';
    });
  }
}
