import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Producto } from '../model/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorCategoriaService {

  constructor(private http:HttpClient) { }

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>("http://localhost:3000/categorias");

  }
  getCodigoProductos():Observable<number[]>{
    return this.http.get<Producto[]>("http://localhost:3000/productos").pipe(
      map(producto => producto.map(p => p.codigo))
    );
  }

  getProductosPorCategoria(idCategoria:number):Observable<Producto[]>{
    return this.http.get<Producto[]>(`http://localhost:3000/productos?idCategoria=${idCategoria}`);
  }

  postNuevoProducto(nuevoProducto:Producto):Observable<void>{
    let heads = new HttpHeaders();
    heads=heads.set("Content-Type","application/json");
    return this.http.post<void>("http://localhost:3000/productos",nuevoProducto, {"headers":heads});
  }

}
