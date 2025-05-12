import { Component, OnInit } from '@angular/core';
import { ContinentesService } from '../service/continentes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pais } from '../model/Pais';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-continentes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './continentes.component.html',
  styleUrl: './continentes.component.css'
})
export class ContinentesComponent implements OnInit {
  paises: Pais[];
  continentes: string[];
  continenteSeleccionado:string = "";
  paisesFiltrados:Pais[]=[];

  constructor(private continentesService: ContinentesService) {}

  ngOnInit(): void {
    //subscribe es un metodo del Observable que esta en el servicio
    //getContinentesConObservable() depende de los países ya cargados, evitamos usar subscribe anidados
   //creamos otro metodo y lo llamamos desde ngOnInit

    this.continentesService.getDatosPaises()
    .subscribe(data => {
        this.paises = data;
        console.log('JSON cargado con HttpClient:', data);
      });
    this.getContinentesConObservable();
  }

  getContinentesConObservable():void{
    this.continentesService.getContinentesConObservable()
    .subscribe(continentes => {
        this.continentes = continentes;
        console.log('Continentes', this.continentes);
      });
  }

  getPaisesFiltrados(): void {
    console.log("Continente seleccionado", this.continenteSeleccionado);
    this.continentesService.getPaisesFiltrados(this.continenteSeleccionado)
    .subscribe(paises =>{
      this.paisesFiltrados = paises;
      console.log("Paises filtrados", this.paisesFiltrados);
    })
  }
}
