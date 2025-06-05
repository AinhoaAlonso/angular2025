import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../model/Matricula';
import { Curso } from '../model/Curso';
import { urlBase } from '../../utilities/Constants';

@Injectable({
  providedIn: 'root'
})
export class MatriculacionService {

  constructor(private http:HttpClient) { }

  getAlumnosMatriculados(idCursoSeleccionado:number):Observable<Matricula[]>{
    return this.http.get<Matricula[]>(`${urlBase}/matriculas/${idCursoSeleccionado}`)
  }

  getDatosCurso():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${urlBase}/cursos`);
  }

}
