import { Component } from '@angular/core';
import { ClientesComponent } from './clientes/clientes.component';

@Component({
  selector: 'app-root',
  imports: [ClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '11_registro_clientes';
}
