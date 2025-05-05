import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentesService {
  constructor(private http: HttpClient) {}

  obtenerDatosDesdeJson(): Observable<any[]> {
    return this.http.get<any>('assets/paises.json');
  }

  obtenerContinentes(datos: any[]): string[] {
    return [...new Set(datos.map(p => p.continente))];
  }
}

