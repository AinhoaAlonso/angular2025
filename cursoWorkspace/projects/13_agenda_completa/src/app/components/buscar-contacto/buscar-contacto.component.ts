import { Component } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-buscar-contacto',
  imports: [FormsModule],
  templateUrl: './buscar-contacto.component.html',
  styleUrl: './buscar-contacto.component.css'
})
export class BuscarContactoComponent {
  email:string;
  contactoBuscado:Contacto;

  constructor(private contactoService:ContactoService){}
  buscarContacto():void{
    this.contactoBuscado = this.contactoService.buscarContacto(this.email);
    console.log("Contacto Buscado", this.contactoBuscado);
    this.email = "";
  }
}
