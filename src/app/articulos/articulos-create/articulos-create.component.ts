import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo.model';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos-create',
  templateUrl: './articulos-create.component.html',
  styleUrls: ['./articulos-create.component.scss']
})
export class ArticulosCreateComponent implements OnInit {

  model: Articulo = new Articulo();

  constructor(private articulosService: ArticulosService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.articulosService.create(this.model).subscribe(res => {
      console.log(res);
      this.router.navigate(['articulos/list']);
    })
  }

}
