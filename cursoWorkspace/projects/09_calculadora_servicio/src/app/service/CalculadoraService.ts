export class CalculadoraService{
  sumar(num1:number,num2:number):number{
    return num1 + num2;
  }
  multiplicar(num1:number, num2:number):number{
    return num1 * num2;
  }
  //Va multiplicando hacia atras: Ejemplo num=5, 5*4*3*2*1
  factorial (num:number):number{
    let resultado:number = 1;
    for(let i=num; i>1; i--){
      resultado= resultado * i;
    }
    return resultado;
  }

}
