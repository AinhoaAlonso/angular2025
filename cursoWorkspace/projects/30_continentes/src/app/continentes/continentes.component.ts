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
  //paises: Pais[];
  continentes: string[];
  continenteSeleccionado:string = "";
  paisesFiltrados:Pais[];

  constructor(private continentesService: ContinentesService) {}

  ngOnInit(): void {
    //subscribe es un metodo del Observable que esta en el servicio
    //Esta opcion es por si queremos todos los paises directamente en la página
    /*this.continentesService.getDatosPaises()
    .subscribe(data => {
        this.paises = data;
        console.log('JSON cargado con HttpClient:', data);
      });
    this.getContinentesConObservable();*/

    //Continentes sin duplicados en el combo
    this.continentesService.getContinentesConObservable()
    .subscribe(continentes => {//Observable <string[]>
        this.continentes = continentes;
        console.log('Continentes', this.continentes);
      });
  }
  //Filtra los paises dependiendo de la seleccion de continente
  getPaisesFiltrados(): void {
    console.log("Continente seleccionado", this.continenteSeleccionado);
    this.continentesService.getPaisesFiltrados(this.continenteSeleccionado)
    .subscribe(paises =>{ //Observable <Pais[]>
      this.paisesFiltrados = paises;
      console.log("Paises filtrados", this.paisesFiltrados);
    })
  }
}
