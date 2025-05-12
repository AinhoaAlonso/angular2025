import { Component, OnInit } from '@angular/core';
import { ContinentesService } from '../service/continentes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pais } from '../model/Pais';

@Component({
  selector: 'app-continentes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './continentes.component.html',
  styleUrl: './continentes.component.css'
})
export class ContinentesComponent implements OnInit {
  paises: Pais[];
  continentes: Set<string>;
  continenteSeleccionado:string = "";
  paisesFiltrados:Pais[]=[];

  constructor(private continentesService: ContinentesService) {}

  ngOnInit(): void {
    //subscribe es un metodo del Observable que esta en el servicio
    this.continentesService.getDatosPaises()
    .subscribe(data => {
      this.paises = data;
      this.continentes = this.continentesService.getContinentes(data);
      console.log('JSON cargado con HttpClient:', data);
      console.log('Continentes', this.continentes);
    });

  }
  getPaisesFiltrados(): void {
    this.paisesFiltrados = this.paises.filter(elemento => elemento.region == this.continenteSeleccionado || this.continenteSeleccionado == "todos");
    console.log("Continente seleccionado", this.continenteSeleccionado);
  }
}
