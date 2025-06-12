export class Pedido{
    producto:string;
    unidades:number;
    total:number;
    fechaPedido:Date;
    constructor(producto:string, unidades:number, total:number, fechaPedido:Date){
        this.producto = producto;
        this.unidades = unidades;
        this.total = total;
        this.fechaPedido = fechaPedido;
    }
}
