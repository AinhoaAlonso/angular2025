import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../service/contacto.service';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-crear-contacto',
  imports: [FormsModule],
  templateUrl: './crear-contacto.component.html',
  styleUrl: './crear-contacto.component.css'
})
export class CrearContactoComponent {
  nombre:string;
  email:string;
  telefono:string;
  agenda:Contacto[];
  mensaje:string = "";

  constructor(private contactoService:ContactoService){}

  crearContacto():void{
    let contacto = new Contacto (this.nombre, this.email, this.telefono);
    //lo que devuelve la funcion del servicio lo recojo en una variable para la verificación del email del contacto.
    let existeContacto = this.contactoService.crearContacto(contacto);
    console.log(contacto);
    if(!existeContacto){
      this.mensaje = "El contacto ya existe";
    } else{
      this.mensaje = "Contacto guardado";
    }
    this.limpiarInputs();
  }

  limpiarInputs():void{
    this.nombre = "";
    this.email = "";
    this.telefono = "";
  }
}
