import { Injectable } from '@angular/core';
import { Clientes } from '../model/Clientes';

@Injectable({
  providedIn: 'root'
})
export class RegistroClientesService {

  constructor() { }
  listadoClientes: Clientes[]=[];

  //metodo para validar que los parametros que pasamos son iguales a los que estan en el array clientes(viene del model).Utilizamos el find para que los busque y los compare
  validarUsuario(usuario:string,password:string):Clientes{
    return this.listadoClientes.find((user) => user.usuario == usuario && user.password == password);
  }

  registrarClientes(cliente:Clientes):void{
    this.listadoClientes.push(cliente);
    console.log("Listado clientes", this.listadoClientes);
  }
}
