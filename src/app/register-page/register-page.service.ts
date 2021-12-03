import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecaptchaResponse } from './models/recaptchaResponse';

@Injectable({
  providedIn: 'root',
})
export class RegisterPageService {
  constructor(private http: HttpClient) {}

  public verfiy(token: string): Observable<RecaptchaResponse> {
    return this.http.post<RecaptchaResponse>('/auth/recaptcha/verify', {
      response: token,
    });
  }
}
