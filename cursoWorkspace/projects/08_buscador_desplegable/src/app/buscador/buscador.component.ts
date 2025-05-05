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
  //Los cojo del archivo DatosTematicas
  datosTematicas:DatosTematicas;
  tematicaSeleccionada:string = "";
  direcciones:string[] = [];
  //Creo una variable de tipo conjunto para quitar duplicados, hay que ponerle el tipo de datos
  tematicasDisponibles:Set<string>;

  constructor(){
    //Creo una instancia de DatosTematicas
    this.datosTematicas = new DatosTematicas();
  }
  // Se utiliza para realizar tareas de inicialización y recuperación de datos. Tb se puede utilizar el constructor para inicializar los datos.
  ngOnInit():void{
    //Utilizando map me devuelve un array con las tematicas que hay en mi array de objeto y creo un nuevo Set para evitar duplicados
    this.tematicasDisponibles = new Set(this.datosTematicas.elementos.map(d => d.tematica));
  }

  buscarUrlDeTematicas():void{
    if(this.tematicaSeleccionada.length>0){
      this.tematicaSeleccionada == this.tematicaSeleccionada[0];
    }
    //Me devuelve un array de las direcciones cuando la tematica que selecciono es igual a la tematica que va iterando o cuando es todos me muestra todas las direcciones
    this.direcciones = this.datosTematicas.elementos.filter(elemento => elemento.tematica == this.tematicaSeleccionada || this.tematicaSeleccionada == "todos").map(elemento =>elemento.direccion);
  }
}
