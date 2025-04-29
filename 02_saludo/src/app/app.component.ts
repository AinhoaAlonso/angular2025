import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:any;
  //ponemos void cuando la función no devuelve nada
  saludar():void{
    //recogemos en una variable el campo input
    let nombreUsuario:any = document.getElementById("nombre");
    //Recoge el objeto div en una variable
    let respuesta:any = document.getElementById("mensaje");
    respuesta.innerHTML = `Bienvenido a mi pagina ${nombreUsuario.value}`;
  }
}
