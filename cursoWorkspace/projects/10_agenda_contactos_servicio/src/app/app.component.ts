import { Component } from '@angular/core';
import { AgendaComponent } from './agenda/agenda.component';

@Component({
  selector: 'app-root',
  imports: [AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '10_agenda_contactos_servicio';
}
