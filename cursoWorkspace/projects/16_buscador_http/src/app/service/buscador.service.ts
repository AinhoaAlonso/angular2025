import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElementoTematica } from '../model/elemento-tematica';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient) { }

  getDatosTematicas(tematicaBuscada:string):Observable<any>{
    return this.http.get<any>("http://localhost:8000/buscador/buscar",{
      params:{"tematica":tematicaBuscada}, observe:"response"});
  }

  postNuevaAlta(elementoTematica:ElementoTematica):Observable<void>{
    let heads = new HttpHeaders();
    heads=heads.set("Content-Type","application/json");
    return this.http.post<void>("http://localhost:8000/buscador/alta",elementoTematica, {"headers":heads});
  }

  deleteDatosTematica(tematicaParaEliminar:string): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/buscador/eliminar",{
      params:{"tematica":tematicaParaEliminar}, observe:"response"});
  }
}
