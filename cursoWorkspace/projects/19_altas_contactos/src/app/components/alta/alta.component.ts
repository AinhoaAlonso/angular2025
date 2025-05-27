import { Component } from '@angular/core';
import { ContactosService } from '../../Service/contactos.service';
import { Contacto } from '../../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta',
  imports: [FormsModule, CommonModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string;
  contacto:Contacto = new Contacto();
  constructor(private contactosService: ContactosService){}

  alta(){
    //Si controlamos el error aqui en el componente
    /*this.contactosService.alta(this.contacto).subscribe({
      next: data => this.mensaje = "Contacto agregado",
      error: err => this.mensaje = " No se pudo dar de alta el contacto!"
    })*/

    this.contactosService.alta(this.contacto)
    .subscribe(data =>{
      if(data){
        this.mensaje = "Contacto agregado";
      }else{
        this.mensaje = "No se pudo dar de alta el contacto!";
      }
    })
  }


}
