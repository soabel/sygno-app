import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  today = new Date();

  constructor(private articulosService: ArticulosService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.articulosService.findAll()
      .subscribe(res => {
        this.modelBase = res;
        this.model = res.data;
        this.spinner.hide();
      });
  }

  nuevo(): void {
    this.router.navigate(['articulos/create']);
  }

  previous(): void {
    this.find(this.modelBase.previousPage);
  }

  next(): void {
    this.find(this.modelBase.nextPage)
  }

  private find(url: string) {
    this.spinner.show();
    this.articulosService.find(url)
      .subscribe(res => {
        this.modelBase = res;
        this.model = res.data;
        this.spinner.hide();
      });
  }

}
