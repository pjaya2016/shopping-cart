import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { includes } from 'lodash';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './NotificationService';
import { Notifiy } from './models/Notify';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  notificationService: NotificationService | undefined;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloneObject = {
      url: `http://localhost:8081/api/v1${req.url}`,
    };
    if (!(includes(req.url, 'login') || includes(req.url, 'register'))) {
      let obj = {
        headers: req.headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('id_token')}`
        ),
      };

      cloneObject = { ...cloneObject, ...obj };
    }

    const apiReq = req.clone(cloneObject);
    console.log(apiReq);
    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // client-side error
        } else {
          // server-side error
          this.notificationService?.notifiyGlobalMessage(
            new Notifiy('error', 'Alert', error.status + '')
          );

          switch (error.status) {
            case 403:
              localStorage.clear();
              window.location.href = 'login';
              break;
          }
        }
        console.error(error);

        return throwError(error);
      })
    );
  }
}
