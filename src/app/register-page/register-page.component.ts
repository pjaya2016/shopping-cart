import { AuthService } from './../Injectable/AuthService';
import { Register } from './models/Register';
import { Component, OnInit } from '@angular/core';
import { RegisterPageService } from './register-page.service';
import { RecaptchaResponse } from './models/recaptchaResponse';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

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
  siteKey: string = 'SET_KEY';
  notARobot: RecaptchaResponse = {
    success: false,
    challenge_ts: new Date(),
    hostname: '',
    'error-codes': [],
  };
  userform!: FormGroup;
  submitted: boolean = false;

  constructor(
    authService: AuthService,
    private registerPageService: RegisterPageService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.authService = authService;
  }

  passwordMatchingValidatior: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    console.log('Comming through');
    let val =
      password?.value === confirmPassword?.value ? null : { notmatched: true };
    return val;
  };

  ngOnInit(): void {
    this.userform = this.fb.group(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordMatchingValidatior }
    );
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
      sticky: true,
    });
  }

  get diagnostic() {
    return JSON.stringify(this.userform.value);
  }

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.registerPageService.verfiy(captchaResponse).subscribe((res) => {
      this.notARobot = res as RecaptchaResponse;
    });
  }

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
    });
  }
}
