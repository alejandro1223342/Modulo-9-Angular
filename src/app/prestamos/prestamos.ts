import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
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

  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
