import { Component } from '@angular/core';
import { BuscadorService } from '../service/buscador.service';
import { ElementoTematica } from '../model/elemento-tematica';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nueva-alta',
  imports: [FormsModule,CommonModule],
  templateUrl: './nueva-alta.component.html',
  styleUrl: './nueva-alta.component.css'
})
export class NuevaAltaComponent {
  elementosTematicas:ElementoTematica[]=[];
  nuevaTematica:string;
  nuevaUrl:string;
  nuevaDescripcion:string;

  constructor(private buscadorService: BuscadorService){}

  postNuevaAlta():void{
    let nuevoElemento: ElementoTematica = {
      tematica: this.nuevaTematica,
      url: this.nuevaUrl,
      descripcion: this.nuevaDescripcion
    };
    console.log("Nueva alta", nuevoElemento);
    this.buscadorService.postNuevaAlta(nuevoElemento)
    .subscribe({}
    )
    this.nuevaTematica = "";
    this.nuevaUrl = "";
    this.nuevaDescripcion = "";
  }
}
