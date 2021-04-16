import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {

    // const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2IiwidHlwIjoiSldUIn0.eyJqdGkiOiIxM2VhMjViZC00NDMxLTQxYWEtOTQxZi03OTAyYzdkMzBhNWMiLCJzdWIiOiJvZ2Vuc29sbGVuQGhvdG1haWwuY29tIiwibmJmIjoxNjE4NTM1MjEyLCJleHAiOjE2MTg1MzUyNzIsImlzcyI6IkpXUEFQSSIsImF1ZCI6IlNhbXBsZUF1ZGllbmNlIn0.ajDJ4pxDD_s7kf51uBECx_k0sKNGP2DG0ycFI8RhDRT73oPYjlYvYR0G8uChRDvBqbdGEM3TjpiXJNrPvOBx_DTTKC08-zeuY28uQtGBJPJ1KjfynhBNk0QVWbW8A8xraWb7IYwIALOsU1fM82CwLTMLkNoFgJ_6iIzLf_t-idr5bSspYr1k-FlW7pltQFcvA5pPxjOPtyAtNDeXmwYdDoyWewlLYBOZAqouVeNGfBbY_uAKj65u0xtkSKc5VGfBMZXmUfd9GOdTJiz3DI0VL0QQ0nqJmKidNGukIRlt1oiKeQevtU1xMwvunKtVO9MZcYVaaw4AFSeiSpufm9AArw';

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: `Bearer ${token}`
    //   })
    // };

    // return this.http.
    //   get<any>(`${environment.apiSygnoUrl}/api/Clientes`, httpOptions);

    return this.http.
      get<any>(`${environment.apiSygnoUrl}/api/Clientes`);
  }
}
