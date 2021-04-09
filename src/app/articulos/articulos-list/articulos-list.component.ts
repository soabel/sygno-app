import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo.model';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.scss'],
  // providers: [ArticulosService]
})
export class ArticulosListComponent implements OnInit {

  modelBase: any = {};
  model: Articulo[];

  constructor(private articulosService: ArticulosService, private router: Router) { }

  ngOnInit(): void {
    this.articulosService.findAll()
      .subscribe(res => {
        this.modelBase = res;
        this.model = res.data;
      });
  }

  nuevo(): void {
    this.router.navigate(['articulos/create']);
  }

  previous(): void {

    this.articulosService.find(this.modelBase.previousPage)
      .subscribe(res => {
        this.modelBase = res;
        this.model = res.data;
      });
  }

  next(): void {

    this.articulosService.find(this.modelBase.nextPage)
      .subscribe(res => {
        this.modelBase = res;
        this.model = res.data;
      });
  }

}
