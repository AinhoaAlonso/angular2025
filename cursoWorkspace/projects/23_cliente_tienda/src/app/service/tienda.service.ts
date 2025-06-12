import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  token:string;
  username:string = "usuario1";
  password:string = "usuario1";
  urlBaseRecursos: string = "http://localhost:4000/tienda";
  urlAutenticar:string = "http://localhost:4000/auth/login";

  constructor(private http:HttpClient) {
    //nos conectamos con el recurso de login
    http.post<any>(this.urlAutenticar,{username:this.username, password:this.password})
    .subscribe(data=>this.token=data.access_token);
   }

   productos():Observable<Producto[]>{
    let head = new HttpHeaders();
    head = head.set("Authorization",`Bearer ${this.token}`)
    return this.http.get<Producto[]>(`${this.urlBaseRecursos}/catalogoProductos`, {headers:head});
   }

   altaPedido(pedido:Pedido):Observable<void>{
    let head = new HttpHeaders();
    head= head.set("Authorization",`Bearer ${this.token}`)
    return this.http.post<void>(`${this.urlBaseRecursos}/altaPedido`, {headers:head});
   }

}
