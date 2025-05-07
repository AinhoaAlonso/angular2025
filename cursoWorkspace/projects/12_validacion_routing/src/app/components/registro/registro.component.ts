import { Component } from '@angular/core';
import { RegistroClientesService } from '../../service/registro-clientes.service';
import { Clientes } from '../../model/Clientes';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;

  constructor(private registroClientesService: RegistroClientesService, private router: Router){}
  registrarClientes():void{
    let cliente = new Clientes(this.usuario,this.password,this.email,this.telefono);
    this.registroClientesService.registrarClientes(cliente);
    //navegacion al componente de validación
    this.router.navigate(["/validar"]);
  }
}
