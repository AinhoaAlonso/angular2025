import { Component, OnInit } from '@angular/core';
import { MatriculacionService } from '../../service/matriculacion.service';
import { Curso } from '../../model/Curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriculacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculacion.component.html',
  styleUrl: './matriculacion.component.css'
})
export class MatriculacionComponent implements OnInit {

  cursos:string[];
  constructor(private matriculacionService:MatriculacionService){}

  ngOnInit(): void {
    this.matriculacionService.getCursos().subscribe(
      data => {
        this.cursos = data
        console.log("Cursos", this.cursos)
    });

  }

  /*getCursos(){
    this.matriculacionService.getCursos().subscribe(
      data => {
        this.cursos = data
        console.log("Cursos", this.cursos)
    });

  }*/
}
