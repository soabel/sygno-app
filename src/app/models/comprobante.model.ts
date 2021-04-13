export class Comprobante {
    id: number;
    fechaEmision: string;
    idCliente: number;
    idTipoComprobante: number;
    idTipoMoneda?: number;
    formaPago: string;
    total: number;
    detalles: ComprobanteDetalle[];

    constructor(){
        this.detalles= [];
    }

}

export class ComprobanteDetalle{
    id: number;
    item: number;
    idArticulo: number;
    cantidad: number;
    precio: number;
    subtotal: number;
}