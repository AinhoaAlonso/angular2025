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
  paises: any[] = [];
  continentes: string[] = [];
  continenteSeleccionado = '';

  constructor(private continentesService: ContinentesService) {}

  ngOnInit(): void {
    this.continentesService.obtenerDatosDesdeJson().subscribe(datos => {
      this.paises = datos;
      this.continentes = this.continentesService.obtenerContinentes(datos);
      console.log('✅ JSON cargado con HttpClient:', this.paises);
    });
  }

  getPaisesFiltrados(): any[] {
    return this.continenteSeleccionado === ''
      ? this.paises
      : this.paises.filter(p => p.continente === this.continenteSeleccionado);
  }
}
