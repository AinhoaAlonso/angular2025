import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
  //Este funciona pero vamos a mejorar la logica
  /*getContinentes(paises:Pais[]): Set<string> {
    this.continentesSinDuplicados = new Set(paises.map(p => p.region));
    console.log("Continentes sin duplicados", this.continentesSinDuplicados);
    return this.continentesSinDuplicados;
  }*/
  //El metodo devuelva un Observable con los continentes Sin Duplicados
  //pipe() es un método de los observables que te permite encadenar operadores de RxJS(map, filter,..)
  //Primer map:es el operador de RxJS, que transforma lo que emite el Observable, un flujo de datos que (cuando se resuelve) emite un array de países.
  //Segundo map:extrae la regiones del array
  //Set no devuelve un array por eso ponemos[...] tb podriamos hacer Array.from()
  getContinentesConObservable():Observable<string[]>{
    return (this.http.get<Pais[]>(this.url).pipe(
      map((paises: Pais[]) =>[...new Set(paises.map(p => p.region))])));
  }

  getPaisesFiltrados(continenteSeleccionado:string):Observable<Pais[]>{
    return (this.http.get<Pais[]>(this.url).pipe(
      map((paises: Pais[]) =>paises.filter(elemento => elemento.region == continenteSeleccionado || continenteSeleccionado == "todos"))));
  }
}
