import { Component } from '@angular/core';
import { CalculadoraService } from '../service/CalculadoraService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1:number;
  num2:number;
  numFactorial:number;
  resultado: string;

  //Variable para el objeto de servicio
  calculadoraService:CalculadoraService;
  constructor(){
    this.calculadoraService= new CalculadoraService();
  }

  sumar():void{
    this.resultado = `La suma es: ${this.calculadoraService.sumar(this.num1,this.num2)}`;
  }

  multiplicar():void{
    this.resultado = `La multiplicación es: ${this.calculadoraService.multiplicar(this.num1,this.num2)}`;
  }

  factorial():void{
    this.resultado = `El factorial es: ${this.calculadoraService.factorial(this.numFactorial)}`;
  }
}
