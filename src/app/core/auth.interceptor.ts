import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../transport/response/login.response';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const auth = JSON.parse(sessionStorage.getItem('auth')) as LoginResponse;

    if (request.url.indexOf('api/login') < 0) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
