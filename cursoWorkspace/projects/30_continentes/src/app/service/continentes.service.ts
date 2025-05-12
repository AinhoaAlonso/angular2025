import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})

export class ContinentesService {
  continentesSinDuplicados:Set<string>;
  url: string = "https://restcountries.com/v2/all";
  constructor(private http: HttpClient) {}

  //El Observable es el que se encarga de prometerte que te va a dar los datos desde la url
  public getDatosPaises(): Observable<Pais[]> {
    //Saco los datos de un json que esta dentro del proyecto
    //return this.http.get<Pais[]>('assets/paises.json');
    //Datos desde la url
    return this.http.get<Pais[]>(this.url);

  }

  getContinentes(paises:Pais[]): Set<string> {
    this.continentesSinDuplicados = new Set(paises.map(p => p.region));
    console.log("Continentes sin duplicados", this.continentesSinDuplicados);
    return this.continentesSinDuplicados;
  }

}
