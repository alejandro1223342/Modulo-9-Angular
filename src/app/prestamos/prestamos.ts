import { Component } from '@angular/core';
import { Transacciones } from '../components/transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = "https://google.com";
  redirigir = false;
  prestamosList = [
    { id: 1, monto: 5500, estado: "pendiente" },
    { id: 2, monto: 10000, estado: "pagado" },
    { id: 3, monto: 7000, estado: "pendiente" }
  ]

  prestamos = [
    {
      id: 1,
      tipo: "personal",
      interes: "10%"
    },
    {
      id: 2,
      tipo: "personal",
      interes: "12%"
    },
    {
      id: 3,
      tipo: "ssss",
      interes: "15%"
    }
  ]

  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
