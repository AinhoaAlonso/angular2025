import { FormsModule } from '@angular/forms';
import { BuscadorCategoriaService } from './../service/buscador-categoria.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { CommonModule } from '@angular/common';
import { Categoria } from '../model/categoria';


@Component({
  selector: 'app-alta-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent implements OnInit {
  //En el model variables con ? no son obligatorias
  nuevoProducto: Producto = new Producto();
  categorias: Categoria[]=[];
  productos: number[];


  constructor(private buscadorCategoriaService: BuscadorCategoriaService){}

  ngOnInit(): void {
    this.buscadorCategoriaService.getCategorias()
    .subscribe(categorias =>{
      this.categorias = categorias;
      console.log("Datos Categorias", this.categorias);
    })

    this.buscadorCategoriaService.getCodigoProductos()
    .subscribe(productos =>{
      this.productos = productos;
      console.log("Codigos productos", this.productos);
      let ultimoCodigo = this.productos.length > 0 ? Math.max(...this.productos) : 0;
      this.nuevoProducto.codigo = ultimoCodigo + 1;

    })
  }
  postNuevoProducto():void{

    console.log("Nuevo Producto", this.nuevoProducto);

    this.buscadorCategoriaService.postNuevoProducto(this.nuevoProducto)
    .subscribe({});
  }
}
