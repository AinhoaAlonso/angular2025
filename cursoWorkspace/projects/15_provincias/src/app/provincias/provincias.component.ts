import { Provincia } from './../model/Provincia';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProvinciasService } from '../service/provincias.service';
import { Municipio } from '../model/Municipio';



@Component({
  selector: 'app-provincias',
  imports: [FormsModule, CommonModule],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})
export class ProvinciasComponent implements OnInit{
  provincias:Provincia[];
  provinciaSeleccionada:string ="";
  municipios:Municipio[];

  constructor(private provinciasService:ProvinciasService){}

  ngOnInit(): void {
    this.provinciasService.getProvincias()
      .subscribe(provincias =>{
        this.provincias = provincias;
        console.log("Provincias", this.provincias);
      });
  }

  getMunicipios():void{
    console.log("Provincias2", this.provincias);
    this.provinciasService.getMunicipios(this.provinciaSeleccionada)
    .subscribe(municipios =>{
      this.municipios = municipios;
      console.log("Municipios", this.municipios);
    });
  }
}
