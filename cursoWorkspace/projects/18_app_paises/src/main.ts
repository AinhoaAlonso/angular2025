import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ContinentesComponent } from './app/continentes/continentes.component';

bootstrapApplication(ContinentesComponent, appConfig)
  .catch((err) => console.error(err));
