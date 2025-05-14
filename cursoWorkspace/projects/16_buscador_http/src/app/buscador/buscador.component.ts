import { Component, OnInit } from '@angular/core';
import { BuscadorService } from '../service/buscador.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ElementoTematica } from '../model/elemento-tematica';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  datosTematicas:ElementoTematica[]=[];
  tematicaBuscada: string ="";
  constructor(private buscadorService:BuscadorService){}

  getDatosTematicas():void{
    this.buscadorService.getDatosTematicas(this.tematicaBuscada)
    .subscribe(datosTematicas =>{
      this.datosTematicas = datosTematicas;
      console.log("Datos tematicas Buscadas", datosTematicas);
    })
  }
}
