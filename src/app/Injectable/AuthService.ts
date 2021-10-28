import { Register } from './../register-page/models/Register';
import { SuccessRes } from './../login-page/models/SuccessRes';
import { UserLogin } from './../login-page/models/UserLogin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('Loging user in');
    return this.http
      .post<Object>('/auth/login?email=test@test.com&password=test', null)
      .pipe(
        tap((res) => this.setSession(res)),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  register(register: Register): Observable<any> {
    console.log('Registering the user');
    return this.http
      .post<Object>('/auth/register', register)
      .pipe(catchError(this.handleError), shareReplay(1));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  private setSession(successRes: Object) {
    console.log('Setting session');
    let res = <SuccessRes>successRes;
    console.log(res);
    //TODO:NEED TO CHECK WHY EXPIRE IN IS NOT COMMING
    const expiresAt = moment().add(moment.duration(2, 'hours'));
    console.log('Expires at ', moment(expiresAt));
    localStorage.setItem('id_token', res.token);
    localStorage.setItem('expires_at', expiresAt.format());
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    console.log(
      'is loged in before: ' + moment().isBefore(this.getExpiration())
    );
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    return moment(expiration);
  }

  getAuthenticated(): Observable<any> {
    return this.http.get<Object>('/auth/get-authenticated');
  }
}
