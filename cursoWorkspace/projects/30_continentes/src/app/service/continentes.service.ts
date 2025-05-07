import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentesService {
  continentesSinDuplicados:Set<string>;

  constructor(private http: HttpClient) {}

  getDatosDesdeJson(): Observable<any[]> {
    return this.http.get<any>('assets/paises.json');
  }

  getContinentes(paises): any {
    this.continentesSinDuplicados = new Set(paises.map(p => p.region));
    console.log("Continentes sin duplicados", this.continentesSinDuplicados);
    return this.continentesSinDuplicados;
  }
}

