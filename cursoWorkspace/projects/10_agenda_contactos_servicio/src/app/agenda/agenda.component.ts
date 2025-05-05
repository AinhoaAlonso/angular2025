import { AgendaService } from './../service/AgendaService';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/Contacto';
import { CommonModule } from '@angular/common';

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
  contacto:Contacto[];
  //Variable para el objeto de servicio
  agendaService: AgendaService;

  constructor(){
    this.agendaService = new AgendaService();
  }
  guardarContacto():void{
    let contacto = new Contacto(this.nombre, this.email, this.telefono);
    this.agendaService.guardarContacto(contacto)
  }
  borrarContacto(index:number):void{
    this.agendaService.borrarContacto(index);
  }
  mostrarContactos():void{
    this.contacto = this.agendaService.mostrarContactos();
  }
}
