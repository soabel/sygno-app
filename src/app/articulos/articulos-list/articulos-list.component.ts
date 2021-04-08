import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.scss']
})
export class ArticulosListComponent implements OnInit {

  model: any[];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulosService.findAll().subscribe(res => this.model = res);
  }

}
