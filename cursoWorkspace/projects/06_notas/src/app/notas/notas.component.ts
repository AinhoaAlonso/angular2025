import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-root-notas',
  imports: [FormsModule, CommonModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  notaIntroducida:number;
  listadoNotas:number[] = [];
  visible: boolean = false;

  notaMedia: number = 0;
  notaMasAlta:number;
  notaMasBaja:number;
  numeroAprobados:number;

  guardarNotas():void{
    if(this.notaIntroducida<=10){
      this.listadoNotas.push(this.notaIntroducida);
      this.notaIntroducida = null;
      console.log("Array Notas", this.listadoNotas);
    }
  }

  calcularMedia():number{
    //reduce devuelve un unico numero, suma todos los elementos del array.
    let sumaNotas:number = this.listadoNotas.reduce((suma, nota)=> suma + nota,0);
    return sumaNotas / this.listadoNotas.length;
  }

  calcularNotaMasAlta():number{
    //utilizo el spread operator para que vaya por cada elemento del array.
    return Math.max(...this.listadoNotas);
  }
  calcularNotaMasBaja():number{
    //utilizo el spread operator para que vaya por cada elemento del array.
    return Math.min(...this.listadoNotas);

    //Otra forma de hacerlo
    //let min = this.notas[0];
    //this.notas.forEach(n=>{
    // if (n<min){
      //min=n;
    //
    //});
    //return min;
  }

  totalAprobados():number{
    return this.listadoNotas.filter(nota => nota>=5).length
  }

  mostrarResultados():void{
    this.visible = true;
    this.notaMedia = this.calcularMedia();
    this.notaMasAlta = this.calcularNotaMasAlta();
    this.notaMasBaja = this.calcularNotaMasBaja();
    this.numeroAprobados = this.totalAprobados();
    /*console.log("Divisor", this.listadoNotas.length);
    console.log("Nota media", this.notaMedia);*/
  }
}
