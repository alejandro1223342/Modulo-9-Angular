import { Component, Input } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cuentas',
  imports: [],
  templateUrl: './cuentas.html',
  styleUrl: './cuentas.css',
})
export class Cuentas {

  @Input() nombreCliente: string = "";

  public titulo: string;
  public clientes: Array<Cliente>;
  public saldoTotal: number;

  constructor(){
    this.titulo = "Cuentas";
    this.clientes = [
      new Cliente(1, 'Alejandro', 'Perez', 'ale@', 1000),
      new Cliente(2, 'Ana', 'Gomez', 'ana@', 2000),
    ];
    this.saldoTotal = 0;
  }

    ngOnInit(){
    console.log("Se ha cargado el componente Cuentas");
  }

  ngOnDestroy(){
    console.log("Se ha eliminado el componente Cuentas");
  }
}
