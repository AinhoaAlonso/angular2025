import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Curso } from '../model/Curso';
import { Alumno } from '../model/Alumno';
import { Matricula } from '../model/Matricula';


@Injectable({
  providedIn: 'root'
})
export class MatriculacionService {
  urlCursos: string = "http://localhost:3000/cursos/todos";
  urlAlumnosNoMatriculados: string = "http://localhost:3000/cursos/alumnosNoMatriculados/";
  urlMatricular: string ="http://localhost:3000/cursos/matricular"
  constructor(private http:HttpClient) { }

  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlCursos);
    //.pipe(map((cursos)=> cursos.map(c => c.nombre))))
  }

  getAlumnosNoMatriculados(idCursoSeleccionado:number):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.urlAlumnosNoMatriculados}${idCursoSeleccionado}`)
  }

  matricularAlumnos(nuevaMatricula:Matricula):Observable<boolean>{
    let heads = new HttpHeaders();
    heads=heads.set("Content-Type","application/json");
    return this.http.post<boolean>(this.urlMatricular,nuevaMatricula, {"headers":heads})
    .pipe(map(()=>true),
                   catchError(e=>of(false))); ;
  }
}
