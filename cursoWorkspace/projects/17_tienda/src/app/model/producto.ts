export class Producto{
  codigo: number;
  denominacion: string;
  precio: number;
  idCategoria: number;
  id: string;
  constructor(codigo?:number, denominacion?:string, precio?:number, idCategoria?:number,id?:string){
    this.codigo = codigo;
    this.denominacion = denominacion;
    this.precio = precio;
    this.idCategoria = idCategoria;
    this.id = id;
  }
}
