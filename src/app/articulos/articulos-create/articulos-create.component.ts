import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Articulo } from 'src/app/models/articulo.model';
import { ArticulosService } from 'src/app/services/articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos-create',
  templateUrl: './articulos-create.component.html',
  styleUrls: ['./articulos-create.component.scss']
})
export class ArticulosCreateComponent implements OnInit {

  model: Articulo = new Articulo();

  constructor(private articulosService: ArticulosService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.spinner.show();
    this.articulosService.create(this.model).subscribe(res => {
      this.spinner.hide();

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'success',
        title: `Artículo ${this.model.descripcion} creado.`
      });

      this.router.navigate(['articulos']);
    })
  }

}
