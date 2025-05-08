import { Component, OnInit } from '@angular/core';
import { ContinentesService } from '../service/continentes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-continentes',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './continentes.component.html',
  styleUrl: './continentes.component.css'
})
export class ContinentesComponent implements OnInit {
  paises: any[];
  continentes: string[];
  continenteSeleccionado:string = "";
  paisesFiltrados:string[]=[];

  constructor(private continentesService: ContinentesService) {}

  ngOnInit(): void {
    this.continentesService.getDatosDesdeJson().subscribe(datos => {
      this.paises = datos;
      this.continentes = this.continentesService.getContinentes(datos);
      console.log('✅ JSON cargado con HttpClient:', datos);
      console.log('✅ Continentes', this.continentes);
    });

  }
  getPaisesFiltrados(): void {
    this.paisesFiltrados = this.paises.filter(elemento => elemento.region == this.continenteSeleccionado);
    console.log("Paises", this.paises);
    console.log("Continente seleccionado", this.continenteSeleccionado);
  }
}
