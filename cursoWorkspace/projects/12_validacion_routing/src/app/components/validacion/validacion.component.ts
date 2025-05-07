import { Component } from '@angular/core';
import { RegistroClientesService } from '../../service/registro-clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  usuario:string;
  password:string;
  mensaje:string;

  constructor(private registroClientesService: RegistroClientesService){}

  validarUsuario():void{
    //Llamamos a la funcion y si existe el cliente lo valida y si no pide el registro
    let cliente = this.registroClientesService.validarUsuario(this.usuario, this.password);
    console.log("Cliente", cliente);
    if(cliente){
      this.mensaje = "Usuario validado Correctamente";
    } else{
      this.mensaje = "Usuario no registrado";
    }
  }
}
