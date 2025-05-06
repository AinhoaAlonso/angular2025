import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/Contacto';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  email:string;
  telefono:string;
  contactos:Contacto[];

  //declaramos la variable del servicio como parametro en el constructor para que la inyecte, hay que poner private para que la pueda usar como variable y la puedan ver los métodos.
  constructor(private agendaService: AgendaService){}
  
  guardarContacto():void{
    let contacto = new Contacto(this.nombre, this.email, this.telefono);
    console.log("Contacto", contacto);
    this.agendaService.guardarContacto(contacto);
  }
  borrarContacto(index:number):void{
    this.agendaService.borrarContacto(index);
  }
  mostrarContactos():void{
    this.contactos = this.agendaService.mostrarContactos();
  }
}
