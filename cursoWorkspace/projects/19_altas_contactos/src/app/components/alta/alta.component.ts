import { Component } from '@angular/core';
import { ContactosService } from '../../Service/contactos.service';
import { Contacto } from '../../../model/Contacto';

@Component({
  selector: 'app-alta',
  imports: [],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string;
  contacto:Contacto = new Contacto();
  constructor(private contactosService: ContactosService){}

  alta(){
    this.contactosService.alta(this.contacto).subscribe({
      next: data => this.mensaje = "Contacto agregado",
      error: err => this.mensaje = " No se pudo dar de alta el contacto!"
    })
  }


}
