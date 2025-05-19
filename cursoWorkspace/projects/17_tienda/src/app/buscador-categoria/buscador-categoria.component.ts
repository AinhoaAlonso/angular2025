import { Component } from '@angular/core';
import { BuscadorCategoriaService } from '../service/buscador-categoria.service';
import { Categoria } from '../model/categoria';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-buscador-categoria',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador-categoria.component.html',
  styleUrl: './buscador-categoria.component.css'
})
export class BuscadorCategoriaComponent {

  categorias: Categoria[]=[];
  idCategoriaSeleccionada: number = 0;
  productos: Producto[]=[];


  constructor(private buscadorCategoriaService: BuscadorCategoriaService){
    this.getCategorias();
  }

  getCategorias():void{
    this.buscadorCategoriaService.getCategorias()
    .subscribe(categorias =>{
      this.categorias = categorias;
      console.log("Datos Categorias",this.categorias);
    })
  }

  getProductosPorCategoria():void{
    this.buscadorCategoriaService.getProductosPorCategoria(this.idCategoriaSeleccionada)
    .subscribe(productos =>{
      this.productos = productos;
      console.log("Datos Productos",this.productos);
    })
  }
}
