import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo.model';
import { Comprobante, ComprobanteDetalle } from 'src/app/models/comprobante.model';

@Component({
  selector: 'app-comprobantes-create',
  templateUrl: './comprobantes-create.component.html',
  styleUrls: ['./comprobantes-create.component.scss']
})
export class ComprobantesCreateComponent implements OnInit {

  model: Comprobante = new Comprobante();

  listaClientes = [{ id: 1, nombre: 'Alfredo Benaute' }, { id: 2, nombre: 'Carlos Benaute' }];

  listaTipoComprobante = [{ id: 1, descripcion: 'Factura' }, { id: 2, descripcion: 'Boleta' }];

  listaTipoMoneda = [{ id: 1, descripcion: 'Dólares' }, { id: 2, descripcion: 'pesos' }];

  listaArticulos: Articulo[] = [{
    "id": 1,
    "codigo": "ART-001",
    "descripcion": "Teclado inalambrico",
    "stock": 1000,
    "precio": 10,
    "foto": "teclado.png"
  },
  {
    "id": 2,
    "codigo": "ART-002",
    "descripcion": "Mouse",
    "stock": 2000,
    "precio": 15,
    "foto": "mouse.png"
  },
  {
    "id": 3,
    "codigo": "ART-003",
    "descripcion": "Monitor LED",
    "stock": 1500,
    "precio": 80,
    "foto": "monitorled.png",
  }];

  constructor() { }

  ngOnInit(): void {
    this.model.idCliente = 1;
    this.model.idTipoComprobante = 1;
    this.model.idTipoMoneda = 1;
  }


  agregarArticulo(): void {

    const nuevoDetalle = new ComprobanteDetalle();
    nuevoDetalle.item = this.model.detalles.length + 1;

    this.model.detalles.push(
      nuevoDetalle
    );

  }

  actualizarDetalle(itemDetalle: ComprobanteDetalle): void {

    const articulo = this.listaArticulos.find(a => a.id == itemDetalle.idArticulo);

    console.log(articulo);

    itemDetalle.precio = articulo.precio;

  }

  calcularSubtotal(itemDetalle: ComprobanteDetalle): void {
    itemDetalle.subtotal = 0;
    if (itemDetalle.precio && itemDetalle.cantidad) {
      itemDetalle.subtotal = itemDetalle.precio * itemDetalle.cantidad;
    }
  }

  eliminarDetalle(index: number): void {
    this.model.detalles.splice(index, 1);
    this.reiniciarCorrelativoDetalle();

  }

  reiniciarCorrelativoDetalle(): void {

    let correlativo = 0;
    this.model.detalles.forEach(e => {
      correlativo += 1;
      e.item = correlativo;
    });
  }



  onSubmit(): void {

  }

}
