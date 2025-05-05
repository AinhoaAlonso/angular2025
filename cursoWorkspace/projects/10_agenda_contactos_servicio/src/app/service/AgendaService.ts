import { Contacto } from "../model/Contacto";

export class AgendaService{
  agenda: Contacto[]= [];
  guardarContacto(contacto:Contacto):void{
    this.agenda.push(contacto);
  }
  borrarContacto(index:number):void{
    this.agenda.splice(index,1);
  }
  mostrarContactos():Contacto[]{
    return this.agenda;
  }
}
