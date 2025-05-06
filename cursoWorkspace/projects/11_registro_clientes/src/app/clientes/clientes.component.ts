import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroClientesService } from '../service/registro-clientes.service';
import { Clientes } from '../model/Clientes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clientes',
  imports: [FormsModule,CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;
  mensaje:string;

  //para que se vea el formulario de registro por defecto no se ve
  registroVisible:boolean = false;
  //para que se vea el formulario de validad por defecto es el que se ve
  validacionVisible:boolean = true;

  listadoClientes: Clientes[];

  constructor(private clientesService: RegistroClientesService){}

  validarUsuario():void{
    let cliente = this.clientesService.validarUsuario(this.usuario, this.password);
    console.log("Cliente", cliente);
    if(cliente){
      this.registroVisible = false;
      this.usuario = "";
      this.password = "";
      this.mensaje = "Usuario registrado Correctamente";
    } else{
      this.registroVisible = true;
      this.validacionVisible = false;
      this.mensaje = "Usuario no registrado";
    }

  }
  registrarClientes():void{
    let usuario = new Clientes(this.usuario, this.password, this.email, this.telefono);
    console.log("Usuario", usuario);
    this.clientesService.registrarClientes(usuario);
    this.usuario = "";
    this.password = "";
    this.email = "";
    this.telefono = "";
    this.validacionVisible = true;
    this.registroVisible = false;
    this.mensaje = "";
  }
}
