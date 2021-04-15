import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginRequest } from '../transport/request/login.request';
import { LoginResponse } from '../transport/response/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(request: LoginRequest): Observable<LoginResponse> {
    const token = {
      accesToken: '123123asdasd',
      userData: request
    } as LoginResponse;
    return of(token);
  }
}
