import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Con el @ se llaman decoradores
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //declaramos la variable y tenemos que poner el tipo de datos
  nombre:string;
  mensaje:string;

  saludar():void{
    //para llamar a las variables que las hemos puesto en el HTML tenemos que hacerlo con el this
    this.mensaje = `Bienvenido a mi página sr/a ${this.nombre}`;
  }
}
