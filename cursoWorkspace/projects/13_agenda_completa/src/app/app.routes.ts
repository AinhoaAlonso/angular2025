import { BuscarContactoComponent } from './components/buscar-contacto/buscar-contacto.component';
import { Routes } from '@angular/router';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { BuscadorComponent } from '../../../08_buscador_desplegable/src/app/buscador/buscador.component';
import { MostrarContactosComponent } from './components/mostrar-contactos/mostrar-contactos.component';

export const routes: Routes = [{
  path:"crearcontacto",
  component:CrearContactoComponent
},
{
  path:"buscarcontacto",
  component:BuscarContactoComponent
},
{
  path:"mostrarcontacto",
  component:MostrarContactosComponent
}
];
