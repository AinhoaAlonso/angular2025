import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Provincia } from '../model/Provincia';
import { Municipio } from '../model/Municipio';



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
    return this.http.get<any>(`https://www.el-tiempo.net/api/json/v2/provincias/${codprovincia}/municipios`).pipe(map((municipios) => municipios.municipios.map((m)=> m)));
  }
}

