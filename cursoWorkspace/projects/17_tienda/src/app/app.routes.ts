import { Routes } from '@angular/router';
import { BuscadorCategoriaComponent } from './buscador-categoria/buscador-categoria.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';

export const routes: Routes = [
  {
      path:"buscarproductos",
      component:BuscadorCategoriaComponent
    },
    {
      path:"altaproductos",
      component:AltaProductoComponent
    },
];
