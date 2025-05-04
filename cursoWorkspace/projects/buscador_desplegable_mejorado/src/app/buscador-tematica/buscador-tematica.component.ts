import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TematicasService } from '../servicios/tematicas.service';

@Component({
  selector: 'app-buscador-tematica',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador-tematica.component.html',
  styleUrl: './buscador-tematica.component.css'
})
export class BuscadorTematicaComponent {

    tematicaSeleccionada:string = "";
    tematicasDisponibles:string[] = [];
    direcciones:string[] = [];

    //Aqui en el constructor añado el service porque es una instancia que voy a utilizar en varios componentes
    constructor(private tematicasService: TematicasService){}

    // Se utiliza para realizar tareas de inicialización y recuperación de datos.
    ngOnInit():void{
      //recojo en una variable la funcion creada en el servicio para coger las tematicas sin duplicados
      this.tematicasDisponibles = this.tematicasService.getTematicasDisponibles();
      console.log("Tematicas filtradas", this.tematicasDisponibles);

      //tambien inicio la función para obtener las direcciones filtradas por temática
      this.direcciones = this.tematicasService.getDirecciones(this.tematicaSeleccionada);

      // Suscripción a cambios para actualizar al agregar nuevas tematicas
      this.tematicasService.cambios.subscribe(() => {
        this.tematicasDisponibles = this.tematicasService.getTematicasDisponibles();

        // Si la temática seleccionada es la nueva, actualiza direcciones
        this.direcciones = this.tematicasService.getDirecciones(this.tematicaSeleccionada);
      });

    }

    buscarUrlDeTematicas():void{
      console.log("tematica seleccionada", this.tematicaSeleccionada);
      // Actualizamos las direcciones cada vez que se selecciona una temática
      this.direcciones = this.tematicasService.getDirecciones(this.tematicaSeleccionada);
    }

}
