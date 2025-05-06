import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor() { }

  agenda: Contacto[]= [];
    guardarContacto(contacto:Contacto):void{
      this.agenda.push(contacto);
      console.log("Agenda", this.agenda);
    }
    borrarContacto(index:number):void{
      this.agenda.splice(index,1);
    }
    mostrarContactos():Contacto[]{
      return this.agenda;
    }
}
