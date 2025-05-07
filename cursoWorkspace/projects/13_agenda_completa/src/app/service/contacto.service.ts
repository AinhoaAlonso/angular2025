import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  agenda:Contacto[]= [];

  constructor() { }

  crearContacto(contacto:Contacto): boolean {
    if (this.agenda.some((c) => c.email === contacto.email)) {
      return false;
    } else {
      this.agenda.push(contacto);
      console.log("Agenda", this.agenda);
      return true;
    }
  }

  buscarContacto(email:string):Contacto{
    return this.agenda.find((e)=>e.email == email);
  }

}
