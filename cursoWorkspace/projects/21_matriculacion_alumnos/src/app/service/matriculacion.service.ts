import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class MatriculacionService {
  urlCursos: string = "http://localhost:3000/cursos/todos";
  constructor(private http:HttpClient) { }

  getCursos():Observable<string[]>{
    return (this.http.get<Curso[]>(this.urlCursos).pipe(
      map((cursos)=> cursos.map(c => c.nombre)))
    )
  }
}
