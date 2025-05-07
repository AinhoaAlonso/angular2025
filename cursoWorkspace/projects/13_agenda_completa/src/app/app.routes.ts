import { BuscarContactoComponent } from './components/buscar-contacto/buscar-contacto.component';
import { Routes } from '@angular/router';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { BuscadorComponent } from '../../../08_buscador_desplegable/src/app/buscador/buscador.component';

export const routes: Routes = [{
  path:"crearcontacto",
  component:CrearContactoComponent
},
{
  path:"buscarcontacto",
  component:BuscarContactoComponent
}
];
