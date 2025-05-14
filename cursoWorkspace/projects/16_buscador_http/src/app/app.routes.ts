import { Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { NuevaAltaComponent } from './nueva-alta/nueva-alta.component';
import { EliminarComponent } from './eliminar/eliminar.component';

export const routes: Routes = [
  {
    path:"buscar",
    component:BuscadorComponent
  },
  {
    path:"alta",
    component:NuevaAltaComponent
  },
  {
    path:"eliminar",
    component:EliminarComponent
  }
];
