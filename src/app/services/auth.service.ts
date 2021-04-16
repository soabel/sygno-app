import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../transport/request/login.request';
import { LoginResponse } from '../transport/response/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    // const token = {
    //   accesToken: '123123asdasd',
    //   userData: request
    // } as LoginResponse;
    // return of(token);

    return this.http.post<LoginResponse>(`${environment.apiSygnoUrl}/api/login`,request);

  }
}
