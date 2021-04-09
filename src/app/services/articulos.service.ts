import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class ArticulosService {

  constructor(private http: HttpClient) { }

  find(url: string): Observable<any> {
    return this.http.
      get<any>(url);
  }

  findAll(pageSize: number = 5): Observable<any> {
    return this.http.
      get<any>(`${environment.apiSygnoUrl}/api/Articulos?PageSize=${pageSize}`);
  }

  create(data: Articulo): Observable<Articulo> {
    return this.http.
      post<Articulo>(`${environment.apiSygnoUrl}/api/Articulos`, data);

  }

}
