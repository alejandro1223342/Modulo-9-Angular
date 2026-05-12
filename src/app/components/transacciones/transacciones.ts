import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacciones',
  imports: [DatePipe],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {

  public titulo: string;
  public transaccionesList: Array<Transaccion>;

  constructor(){
    this.titulo = "Transacciones";
    this.transaccionesList = [
      new Transaccion(1, new Date(), 'Transaccion 1', 100, 'ingreso'),
      new Transaccion(2, new Date(), 'Transaccion 2', 200, 'egreso'),
      new Transaccion(3, new Date(), 'Transaccion 3', 300, 'ingreso'),
      new Transaccion(4, new Date(), 'Transaccion 4', 400, 'egreso'),
      new Transaccion(5, new Date(), 'Transaccion 5', 500, 'ingreso'),
      new Transaccion(6, new Date(), 'Transaccion 6', 600, 'egreso'),
      
    ];
  }
}
