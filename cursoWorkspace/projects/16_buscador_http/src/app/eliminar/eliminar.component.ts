import { Component } from '@angular/core';
import { BuscadorService } from '../service/buscador.service';
import { ElementoTematica } from '../model/elemento-tematica';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule, CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  datosTematicas:ElementoTematica[]=[];
  tematicaParaEliminar: string ="";
  mensaje:string;
  constructor(private buscadorService:BuscadorService){}

  deleteDatosTematica():void{
    this.buscadorService.deleteDatosTematica(this.tematicaParaEliminar)
    .subscribe(Response => {
      console.log(Response)
      if(Response.status === 200){
        this.mensaje = "Tematica eliminada con éxito";
      } else{
        this.mensaje = "Ocurrió un error al eliminar";
      }
    });
  }
}
