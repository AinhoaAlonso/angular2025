import { RegistroComponent } from './components/registro/registro.component';
import { ValidacionComponent } from './components/validacion/validacion.component';
import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"validar",
  component: ValidacionComponent
},
{
  path:"registrar",
  component: RegistroComponent
}
];
