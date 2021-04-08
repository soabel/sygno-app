import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  findAll(): Observable<any> {

    var lista = [
      { id: 1, nombre: 'Sofa', status: 'active', precio: 12 },
      { id: 2, nombre: 'Closet', status: 'inactive', precio: 13 }
    ];

    return of(lista);

  }

}
