import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscadorTematicaComponent } from './buscador-tematica/buscador-tematica.component';
import { NuevasTematicasComponent } from './nuevas-tematicas/nuevas-tematicas.component';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    BuscadorTematicaComponent,
    NuevasTematicasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buscador_desplegable_mejorado';
}
