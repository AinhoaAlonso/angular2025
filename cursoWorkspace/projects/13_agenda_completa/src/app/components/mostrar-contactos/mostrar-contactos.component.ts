import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { ContactoService } from '../../service/contacto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-contactos',
  imports: [CommonModule],
  templateUrl: './mostrar-contactos.component.html',
  styleUrl: './mostrar-contactos.component.css'
})
export class MostrarContactosComponent {
  contactos:Contacto[] = [];

  constructor(private contactoService: ContactoService){}

  ngOnInit():void{
    this.contactos = this.contactoService.mostrarContactos();
  }
  eliminarContacto(index:number):void{
    this.contactoService.eliminarContacto(index);
  }

}
