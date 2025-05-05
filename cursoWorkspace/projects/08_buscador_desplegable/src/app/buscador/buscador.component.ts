import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { DatosTematicas } from '../model/DatosTematicas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  //Los datos y la estructura estan dentro de model/DatosTematicas
  datosTematicas:DatosTematicas;
  tematicaSeleccionada:string = "";
  tematicasDisponibles:string[] = [];
  direcciones:string[] = [];

  constructor(){
    //Creo una instancia de DatosTematicas
    this.datosTematicas = new DatosTematicas();
  }
  // Se utiliza para realizar tareas de inicialización y recuperación de datos.
  ngOnInit():void{
    //Utilizando map me devuelve un array con las tematicas que hay en mi array de objeto
    let todasTematicas = this.datosTematicas.elementos.map(d => d.tematica);
    //Creo un nuevo conjunto para que no haya duplicados y si le pongo [..], me convierte ese SET en un array.
    this.tematicasDisponibles = [...new Set(todasTematicas)];
  }

  buscarUrlDeTematicas():void{

    if(this.tematicaSeleccionada.length>0){
      this.tematicaSeleccionada == this.tematicaSeleccionada[0];
    }
    //Me devuelve un array de las direcciones cuando la tematica que selecciono es igual a la tematica que va iterando o cuando es todos me muestra todas las direcciones
    this.direcciones = this.datosTematicas.elementos.filter(elemento => elemento.tematica == this.tematicaSeleccionada || this.tematicaSeleccionada == "todos").map(elemento =>elemento.direccion);
  }

}
