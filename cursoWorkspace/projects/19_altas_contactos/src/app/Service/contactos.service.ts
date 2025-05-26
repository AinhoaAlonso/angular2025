import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  url:string = "http://localhost:3000/contactos"

  constructor( private http:HttpClient) { }

  alta(contacto:Contacto):Observable<boolean>{
    return this.http.post(`${this.url}/alta`,contacto)

  }
}
