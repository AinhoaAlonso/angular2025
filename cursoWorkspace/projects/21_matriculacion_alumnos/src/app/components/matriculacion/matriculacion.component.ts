import { Component, OnInit } from '@angular/core';
import { MatriculacionService } from '../../service/matriculacion.service';
import { Curso } from '../../model/Curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Alumno } from '../../model/Alumno';
import { Matricula } from '../../model/Matricula';

@Component({
  selector: 'app-matriculacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculacion.component.html',
  styleUrl: './matriculacion.component.css'
})
export class MatriculacionComponent implements OnInit {

  cursos:Curso[];
  idCursoSeleccionado:number = 0;
  alumnos:Alumno[];
  alumnoSeleccionado:string = "";
  mensaje:string = "";

  constructor(private matriculacionService:MatriculacionService){}

  ngOnInit(): void {
    this.matriculacionService.getCursos().subscribe(
      data => {
        this.cursos = data
        console.log("Cursos", this.cursos)
    });
  }
  getAlumnosNoMatriculados(idCursoSeleccionado:number){
    this.matriculacionService.getAlumnosNoMatriculados(idCursoSeleccionado).subscribe(
      data => {
        this.alumnos = data
        console.log("Alumnos no matriculados", this.alumnos)
      });
  }
  matricularAlumnos(){
    const nuevaMatricula:Matricula= new Matricula(this.alumnoSeleccionado, this.idCursoSeleccionado);
    console.log("Nueva Matricula", nuevaMatricula);
    this.matriculacionService.matricularAlumnos(nuevaMatricula).subscribe(
      data =>{
        if(data){
          this.mensaje = "Alumno matriculado con éxito";
        }else{
          this.mensaje = "No fue posible realizar la matricula";
        }
    });
  }
}
