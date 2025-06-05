import { Component, OnInit } from '@angular/core';
import { MatriculacionService } from '../../service/matriculacion.service';
import { Curso } from '../../model/Curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Matricula } from '../../model/Matricula';

@Component({
  selector: 'app-matriculacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculacion.component.html',
  styleUrl: './matriculacion.component.css'
})
export class MatriculacionComponent implements OnInit {
  cursos:Curso[] = [];
  idCursoSeleccionado = 0;
  matriculas:Matricula[] = [];

  constructor(private readonly matriculacionService:MatriculacionService){}

  ngOnInit(): void {
    this.matriculacionService.getDatosCurso().subscribe(
      data => {
        this.cursos = data;
        console.log("Datos Curso", this.cursos)
      }
    );
  }

  getAlumnosMatriculados(idCursoSeleccionado:number){
    this.matriculacionService.getAlumnosMatriculados(idCursoSeleccionado).subscribe(
      data => {
        this.matriculas = data;
        console.log("Alumnos matriculados", this.matriculas);
      }
    )
  }
}
