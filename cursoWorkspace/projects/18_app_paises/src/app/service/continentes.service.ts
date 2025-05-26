import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})

export class ContinentesService {
  url: string = "http://localhost:3000/paises/";
  constructor(private http: HttpClient) {}

  getContinentes():Observable<string[]>{
    return (this.http.get<string[]>(`${this.url}continentes`))
  }

  getPaisesFiltrados(continenteSeleccionado:string):Observable<Pais[]>{
    return (this.http.get<Pais[]>(`${this.url}paises-continente/${continenteSeleccionado}`))
  }
}
