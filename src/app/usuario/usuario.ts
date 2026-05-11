import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-usuario',
  imports: [Ventas, Producto],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = "https://amazon.com";
  redirigir = false;
  marcasAutos = [
    {
      "id": "1",
      "marca": "Toyota",

    },
    {
      "id": "2",
      "marca": "Chevrolet",
    },
    {
      "id": "3",
      "marca": "Nissan",
    }
  ]

  usuario = {
    id: "1",
    nombre: "Alex",
    nick: "AleX",
    rol: "Admin"
  }

  ngOnInit() {
    this.marcasAutos = []
  }
  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
