import { Movimiento } from './../model/Movimiento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  urlMovimientos:string = "http://localhost:3000/movimientos/";

  constructor(private http:HttpClient) { }

  getCuentas(){}


  getMovimientosByCuenta(idCuenta:number):Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.urlMovimientos} buscar/${idCuenta}`)
  }

  buscarPorFechas(fecha1:Date, fecha2:Date):Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.urlMovimientos}fechas?fecha1=${fecha1}&fecha2=${fecha2}`)
  }

  altasMovimientos(movimiento:Movimiento):Observable<Movimiento>{
    return this.http.post<Movimiento>(`${this.urlMovimientos}alta`, movimiento);
  }
}
