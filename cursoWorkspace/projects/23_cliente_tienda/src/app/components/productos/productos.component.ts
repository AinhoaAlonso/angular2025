import { CommonModule } from '@angular/common';
import { TiendaService } from '../../service/tienda.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos:Producto[];

  constructor(private readonly tiendaService:TiendaService){}

  mostrar(){
    this.tiendaService.productos().subscribe(data=>this.productos= data);
  }
}
