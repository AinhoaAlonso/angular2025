import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/Contacto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root-agenda',
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  email:string;
  telefono:string;
  //ponemos el nombre de la clase que hemos creado en otro fichero
  agenda: Contacto[] = [];
  visible: boolean = false;

  //guarda los contactos
  guardarContacto():void{
    //Creamos un objeto con los datos que mete el usuario, esto es importante porque sino no funciona
    let contacto = new Contacto(this.nombre,this.email,this.telefono);
    //añadimos el objeto entero en el array
    this.agenda.push(contacto);
    //En cuanto me guarda el contacto me pone los input vacios.
    this.nombre = "";
    this.email = "";
    this.telefono = "";
    console.log(this.agenda);
  }
  //muestra un listado con los contactos
  mostrarContactos():void{
    //Cambia la variable al contrario de lo que esté en ese momento, por defecto es false.
    this.visible =! this.visible;
  }

  //borra cada contacto
  borrarContacto(index:number):void{
    this.agenda.splice(index,1);
  }

}
