import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1: number;
  num2: number;
  mensaje: string;

  sumar():void{
    let totalSuma:number = this.num1 + this.num2;
    this.mensaje = `La suma total es: ${totalSuma}`;
  }
  multiplicar():void{
    let totalMultiplicacion:number = this.num1 * this.num2;
    this.mensaje = `La multiplicación es: ${totalMultiplicacion}`;
  }

}
