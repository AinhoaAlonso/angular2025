import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  provinciasUrl:string = "https://www.el-tiempo.net/api/json/v2/provincias";

  constructor(private http:HttpClient) { }

  getProvincias(): Observable<any> {
    return this.http.get<any>(this.provinciasUrl).pipe(
      map((provincias) => provincias.provincias.map((p)=>[p.CODPROV, p.NOMBRE_PROVINCIA])));
  }

  getMunicipios(codprovincia:string):Observable<any>{
    return this.http.get<any>(`${this.provinciasUrl}/${codprovincia}/municipios`).pipe(map((municipios) => municipios.municipios.map((m)=> m)));
  }
}

