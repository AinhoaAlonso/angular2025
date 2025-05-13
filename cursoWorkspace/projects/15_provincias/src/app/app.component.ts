import { Component } from '@angular/core';
import { ProvinciasComponent } from './provincias/provincias.component';

@Component({
  selector: 'app-root',
  imports: [ProvinciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '15_provincias';
}
