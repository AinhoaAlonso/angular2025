import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movimiento } from '../../model/Movimiento';
import { MovimientosService } from '../../service/movimientos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  imports: [FormsModule, CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {

  movimientos:Movimiento[];
  constructor(private movimientosService:MovimientosService){}

  getMovimientosByCuenta():void{
    this.movimientosService.getMovimientosByCuenta(this.movimientos)
    .subscribe(
    })
  }
}
