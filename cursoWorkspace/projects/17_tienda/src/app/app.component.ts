import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BuscadorCategoriaComponent } from './buscador-categoria/buscador-categoria.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuscadorCategoriaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '17_tienda';
}
