import { Component } from '@angular/core';
import { ContinentesComponent } from './continentes/continentes.component';

@Component({
  selector: 'app-root',
  imports: [ContinentesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '30_continentes';
}
