import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TematicasService } from '../servicios/tematicas.service';

@Component({
  selector: 'app-nuevas-tematicas',
  imports: [FormsModule],
  templateUrl: './nuevas-tematicas.component.html',
  styleUrl: './nuevas-tematicas.component.css'
})
export class NuevasTematicasComponent {
  nuevaTematica: string;
  nuevaUrl: string;

  //Aqui en el constructor añado el service porque es una instancia que voy a utilizar en varios componentes
  constructor(private tematicasService: TematicasService){}

  guardarNuevaTematica():void{
    console.log("TematicasService", this.tematicasService);

    if (this.nuevaTematica && this.nuevaUrl) {
      // Llamamos al servicio para agregar la nueva temática
      this.tematicasService.agregarNuevaTematica(this.nuevaTematica.toLowerCase(), this.nuevaUrl.toLowerCase());
      // Limpiamos los campos
      this.nuevaTematica = '';
      this.nuevaUrl = '';
    }
  }
}
