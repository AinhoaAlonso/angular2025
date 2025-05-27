export class Movimiento{
    idMovimiento: number;
    idCuenta:number;
    fecha:Date;
    cantidad:number;
    operacion:string;

    constructor(idMovimiento?: number, idCuenta?: number, fecha?: Date, cantidad?: number, operacion?:string) {
        this.idMovimiento = idMovimiento;
        this.idCuenta = idCuenta;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.operacion = operacion;
    }
}
