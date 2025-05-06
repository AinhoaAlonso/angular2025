import { Injectable } from '@angular/core';
import { Clientes } from '../model/Clientes';

@Injectable({
  providedIn: 'root'
})
export class RegistroClientesService {

  constructor() { }
  listadoClientes: Clientes[]=[];

  validarUsuario(usuario:string,password:string):Clientes{
    return this.listadoClientes.find((user) => user.usuario == usuario && user.password == password);
  }

  registrarClientes(cliente:Clientes):void{
    this.listadoClientes.push(cliente);
    console.log("Listado clientes", this.listadoClientes);
  }
}
