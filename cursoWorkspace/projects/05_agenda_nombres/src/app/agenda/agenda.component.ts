import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  //La declaro y la inicializo para que tenga un array vacio
  listadoAgenda: string[] = [];
  //agendaSinDuplicados = new Set();
  visible: boolean = false;

  guardarContacto():void{
    console.log("Nombre", this.nombre);
    //Una forma de no tener duplicados creando un set
    //this.agendaSinDuplicados.add(this.nombre);

    //Otra forma
    if(this.listadoAgenda.some(contacto => contacto==this.nombre)== false && this.nombre != ""){
      this.listadoAgenda.push(this.nombre);
      this.nombre = "";
      console.log(this.listadoAgenda);
    }
  }
  mostrarAgenda():void{
    this.visible = true;
  }
}
